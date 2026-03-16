import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-zinc-700 text-[10px]">/</span>
            )}
            {crumb.href && !isLast ? (
              <Link
                href={crumb.href}
                className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 hover:text-white transition-colors"
              >
                {crumb.label}
              </Link>
            ) : (
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
