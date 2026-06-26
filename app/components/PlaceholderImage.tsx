export default function PlaceholderImage({
  label,
  aspect = "aspect-video",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className={`${aspect} w-full rounded-lg border border-line bg-ink/[0.03] flex items-center justify-center`}
    >
      <span className="font-mono text-xs text-graphite uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}