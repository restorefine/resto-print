export default function SectionLabel({
  num,
  label,
  light = false,
}: {
  num: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[#dc2626] text-[10px] font-bold uppercase tracking-[0.3em]">{num}</span>
      <div className={`flex-1 h-px ${light ? "bg-zinc-800" : "bg-zinc-100"}`} />
      <span className={`text-[10px] uppercase tracking-[0.3em] ${light ? "text-zinc-600" : "text-zinc-400"}`}>
        {label}
      </span>
    </div>
  );
}
