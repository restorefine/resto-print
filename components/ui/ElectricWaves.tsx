"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const vertexShader = `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// CMYK-coloured electric waves — cycles Cyan → Magenta → Yellow → Key per wave
const fragmentShader = `
  precision mediump float;

  uniform float u_time;
  uniform vec2  u_resolution;
  uniform float u_waveCount;
  uniform float u_amplitude;
  uniform float u_frequency;
  uniform float u_brightness;
  uniform float u_colorSeparation;

  float pattern(vec2 uv) {
    float intensity = 0.0;
    for (float i = 0.0; i < u_waveCount; i++) {
      uv.x += sin(u_time * (1.0 + i) + uv.y * u_frequency) * u_amplitude;
      /* clamp denominator to avoid spike/shine where abs(uv.x) → 0 */
      intensity += u_brightness / max(abs(uv.x), 0.003);
    }
    return intensity;
  }

  vec3 scene(vec2 uv) {
    vec3 color = vec3(0.0);
    vec2 ruv = vec2(uv.y, uv.x);

    /* CMYK as additive light colours */
    vec3 cyan    = vec3(0.00, 0.85, 1.00);
    vec3 magenta = vec3(0.85, 0.00, 0.55);
    vec3 yellow  = vec3(1.00, 0.85, 0.00);
    vec3 key     = vec3(0.70, 0.70, 0.70);

    for (float i = 0.0; i < u_waveCount; i++) {
      vec2 cuv = ruv + vec2(0.0, i * u_colorSeparation);
      float intensity = pattern(cuv);
      int ch = int(mod(i, 4.0));
      if      (ch == 0) color += cyan    * intensity;
      else if (ch == 1) color += magenta * intensity;
      else if (ch == 2) color += yellow  * intensity;
      else              color += key     * intensity;
    }
    return color;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / min(u_resolution.x, u_resolution.y);
    vec3 col = scene(uv);

    /* Hard binary cutoff: normalise hue to full saturation,
       then step — pure white below threshold, pure CMYK above.
       No gradients, no grey, no blurry falloff.                         */
    float mag  = length(col);
    vec3  hue  = col / max(mag, 0.001);
    float show = step(0.18, mag);
    vec3  final = mix(vec3(1.0), hue, show);

    gl_FragColor = vec4(final, 1.0);
  }
`;

export default function ElectricWaves() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0xffffff);
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const clock = new THREE.Clock();

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2() },
      u_waveCount: { value: 4.0 },
      u_amplitude: { value: 0.16 },
      u_frequency: { value: 2.0 },
      u_brightness: { value: 0.00101 },
      u_colorSeparation: { value: 0.1 },
    };

    const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      uniforms.u_resolution.value.set(w, h);
    };
    window.addEventListener("resize", onResize);
    onResize();

    renderer.setAnimationLoop(() => {
      uniforms.u_time.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.setAnimationLoop(null);
      container.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />;
}
