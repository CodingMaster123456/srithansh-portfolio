import Link from "next/link";
import PlaceholderImage from "../components/PlaceholderImage";

const projects = [
  {
    slug: "charultima",
    title: "CharUltima",
    summary:
      "Full-stack AI platform for sustainable agriculture combining computer vision, real-time analytics, and scalable backend systems.",
    stack: ["React", "Express.js", "PostgreSQL", "Redis", "TensorFlow.js", "Docker"],
    metric: { value: "<3ms", label: "API latency" },
    image: "Screenshot: charultima.png",
    imageSrc: "/charultima.png",
  },
  {
    slug: "project-two",
    title: "Project Name Two",
    summary: "One-line summary of what this does.",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    metric: { value: "1.2k", label: "lines of Rust rewritten" },
    image: "Screenshot: project-two.png",
  },
  {
    slug: "project-three",
    title: "Project Name Three",
    summary: "One-line summary of what this does.",
    stack: ["Go", "Redis", "Docker"],
    metric: { value: "40ms", label: "p99 latency" },
    image: "Screenshot: project-three.png",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <p className="text-xs uppercase tracking-wide text-graphite mb-3">
        Projects
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
        Things I&apos;ve built
      </h1>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group border border-line rounded-xl overflow-hidden transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30"
          >
            <div className="p-4">
              <PlaceholderImage label={project.image} src={project.imageSrc} />
            </div>
            <div className="px-4 pb-4 -mt-1">
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="font-semibold text-base flex items-center gap-2 group-hover:text-signal transition-colors">
                  <span className="font-mono text-xs text-graphite font-normal">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {project.title}
                </h2>
                <svg
                  className="w-4 h-4 text-graphite shrink-0 mt-0.5 -rotate-90 group-hover:translate-x-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <p className="text-graphite text-sm">{project.summary}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="font-mono text-xs">
                  <span className="text-signal font-medium">
                    {project.metric.value}
                  </span>{" "}
                  <span className="text-graphite">{project.metric.label}</span>
                </div>
                <span className="font-mono text-xs text-graphite group-hover:text-signal transition-colors">
                  View details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}