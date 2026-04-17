"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const declarePI = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`

const proceduralHash11 = `
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`

const proceduralHash21 = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`

const simplexNoise = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`

const vertexShaderSource = `#version 300 es
precision mediump float;
layout(location = 0) in vec4 a_position;
void main() {
  gl_Position = a_position;
}
`

const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;
uniform float u_pxSize;

out vec4 fragColor;

${simplexNoise}
${declarePI}
${proceduralHash11}
${proceduralHash21}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));
  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
  0,  8,  2, 10,
 12,  4, 14,  6,
  3, 11,  1,  9,
 15,  7, 13,  5
);
const int bayer8x8[64] = int[64](
   0, 32,  8, 40,  2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44,  4, 36, 14, 46,  6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
   3, 35, 11, 43,  1, 33,  9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47,  7, 39, 13, 45,  5, 37,
  63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(mod(uv, float(size)));
  int index = pos.y * size + pos.x;
  if (size == 2) return float(bayer2x2[index]) / 4.0;
  else if (size == 4) return float(bayer4x4[index]) / 16.0;
  else if (size == 8) return float(bayer8x8[index]) / 64.0;
  return 0.0;
}

void main() {
  float t = .5 * u_time;
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  uv -= .5;

  float pxSize = u_pxSize;
  vec2 pxSizeUv = gl_FragCoord.xy;
  pxSizeUv -= .5 * u_resolution;
  pxSizeUv /= pxSize;
  vec2 pixelizedUv = floor(pxSizeUv) * pxSize / u_resolution.xy;
  pixelizedUv += .5;
  pixelizedUv -= .5;

  vec2 shape_uv = pixelizedUv;
  vec2 dithering_uv = pxSizeUv;
  vec2 ditheringNoise_uv = uv * u_resolution;

  float shape = 0.;
  if (u_shape < 1.5) {
    shape_uv *= .001;
    shape = 0.5 + 0.5 * getSimplexNoise(shape_uv, t);
    shape = smoothstep(0.3, 0.9, shape);
  } else if (u_shape < 2.5) {
    shape_uv *= .003;
    for (float i = 1.0; i < 6.0; i++) {
      shape_uv.x += 0.6 / i * cos(i * 2.5 * shape_uv.y + t);
      shape_uv.y += 0.6 / i * cos(i * 1.5 * shape_uv.x + t);
    }
    shape = .15 / abs(sin(t - shape_uv.y - shape_uv.x));
    shape = smoothstep(0.02, 1., shape);
  } else if (u_shape < 3.5) {
    shape_uv *= .05;
    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);
  } else if (u_shape < 4.5) {
    shape_uv *= 4.;
    float wave = cos(.5 * shape_uv.x - 2. * t) * sin(1.5 * shape_uv.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shape_uv.y + wave);
  } else if (u_shape < 5.5) {
    float dist = length(shape_uv);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;
  } else if (u_shape < 6.5) {
    float l = length(shape_uv);
    float angle = 6. * atan(shape_uv.y, shape_uv.x) + 4. * t;
    float twist = 1.2;
    float offset = pow(l, -twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);
  } else {
    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(d));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }

  int type = int(floor(u_type));
  float dithering = 0.0;
  switch (type) {
    case 1: { dithering = step(hash21(ditheringNoise_uv), shape); } break;
    case 2: dithering = getBayerValue(dithering_uv, 2); break;
    case 3: dithering = getBayerValue(dithering_uv, 4); break;
    default: dithering = getBayerValue(dithering_uv, 8); break;
  }

  /* 4-band CMYK ordered dithering
     dithering is raw Bayer 0-1 value — used as threshold between bands
     shape 0-1 → mapped to 4 bands: White → Cyan → Magenta → Yellow       */
  float s = clamp(shape * 3.0, 0.0, 3.0);

  vec4 c0 = vec4(1.00, 1.00, 1.00, 1.0); /* White  (paper)  */
  vec4 c1 = vec4(0.00, 0.80, 1.00, 1.0); /* Cyan            */
  vec4 c2 = vec4(0.80, 0.00, 0.53, 1.0); /* Magenta         */
  vec4 c3 = vec4(1.00, 0.85, 0.00, 1.0); /* Yellow          */

  vec4 outColor;
  if      (s < 1.0) outColor = (dithering < s)       ? c1 : c0;
  else if (s < 2.0) outColor = (dithering < s - 1.0) ? c2 : c1;
  else              outColor = (dithering < s - 2.0)  ? c3 : c2;

  fragColor = outColor;
}
`

export const DitheringShapes = {
  simplex: 1, warp: 2, dots: 3, wave: 4, ripple: 5, swirl: 6, sphere: 7,
} as const

export const DitheringTypes = {
  random: 1, "2x2": 2, "4x4": 3, "8x8": 4,
} as const

export type DitheringShape = keyof typeof DitheringShapes
export type DitheringType  = keyof typeof DitheringTypes

interface DitheringShaderProps {
  colorBack?:  string
  colorFront?: string
  shape?:      DitheringShape
  type?:       DitheringType
  pxSize?:     number
  speed?:      number
  className?:  string
  style?:      React.CSSProperties
}

function hexToRgba(hex: string): [number, number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [0, 0, 0, 1]
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
    1,
  ]
}

function makeShader(gl: WebGL2RenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  return s
}

function makeProgram(gl: WebGL2RenderingContext) {
  const prog = gl.createProgram()!
  gl.attachShader(prog, makeShader(gl, gl.VERTEX_SHADER,   vertexShaderSource))
  gl.attachShader(prog, makeShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource))
  gl.linkProgram(prog)
  return prog
}

export function DitheringShader({
  colorBack  = "#ffffff",
  colorFront = "#CC0088",
  shape      = "wave",
  type       = "8x8",
  pxSize     = 4,
  speed      = 0.6,
  className  = "",
  style      = {},
}: DitheringShaderProps) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const rafRef     = useRef<number>(0)
  const progRef    = useRef<WebGLProgram | null>(null)
  const glRef      = useRef<WebGL2RenderingContext | null>(null)
  const startRef   = useRef(Date.now())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl2")
    if (!gl) return
    glRef.current = gl

    const prog = makeProgram(gl)
    progRef.current = prog

    const aPos = gl.getAttribLocation(prog, "a_position")
    const buf  = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW)
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const loc = {
      time:   gl.getUniformLocation(prog, "u_time"),
      res:    gl.getUniformLocation(prog, "u_resolution"),
      back:   gl.getUniformLocation(prog, "u_colorBack"),
      front:  gl.getUniformLocation(prog, "u_colorFront"),
      shape:  gl.getUniformLocation(prog, "u_shape"),
      type:   gl.getUniformLocation(prog, "u_type"),
      pxSize: gl.getUniformLocation(prog, "u_pxSize"),
    }

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener("resize", resize)

    const render = () => {
      const t = (Date.now() - startRef.current) * 0.001 * speed
      gl.clear(gl.COLOR_BUFFER_BIT)
      gl.useProgram(prog)
      gl.uniform1f(loc.time,   t)
      gl.uniform2f(loc.res,    canvas.width, canvas.height)
      gl.uniform4fv(loc.back,  hexToRgba(colorBack))
      gl.uniform4fv(loc.front, hexToRgba(colorFront))
      gl.uniform1f(loc.shape,  DitheringShapes[shape])
      gl.uniform1f(loc.type,   DitheringTypes[type])
      gl.uniform1f(loc.pxSize, pxSize)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      rafRef.current = requestAnimationFrame(render)
    }
    rafRef.current = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
      gl.deleteProgram(prog)
    }
  }, [colorBack, colorFront, shape, type, pxSize, speed])

  return (
    <div className={`absolute inset-0 ${className}`} style={style}>
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
