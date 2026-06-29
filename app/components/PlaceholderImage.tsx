import Image from "next/image";

export default function PlaceholderImage({
  label,
  src,
  aspect = "aspect-video",
}: {
  label: string;
  src?: string;
  aspect?: string;
}) {
  if (src) {
    return (
      <div className={`${aspect} w-full rounded-lg border border-line overflow-hidden relative`}>
        <Image src={src} alt={label} fill className="object-cover" />
      </div>
    );
  }

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