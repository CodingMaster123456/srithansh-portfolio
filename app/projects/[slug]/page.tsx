import Link from "next/link";
import { notFound } from "next/navigation";
import PlaceholderImage from "../../components/PlaceholderImage";

const projects = {
  charultima: {
    title: "CharUltima",
    summary:
      "Full-stack AI platform for sustainable agriculture combining computer vision, real-time analytics, and scalable backend systems.",
    description:
      "An AI-powered farm management platform that recommends biochar treatments using computer vision and real-time soil/crop data. Built and load-tested the backend for high throughput — using wrk with 100 concurrent users, the API sustained 32.9K requests/sec with 100% successful responses and sub-3ms average latency in local benchmarks.",
    stack: ["React", "Express.js", "PostgreSQL", "Redis", "TensorFlow.js", "Docker"],
    metric: { value: "<3ms", label: "API latency" },
    href: "https://github.com/CodingMaster123456/charultima",
    demo: "https://charultima-demo.vercel.app",
    image: "Screenshot: charultima.png",
    imageSrc: "/charultima.png",
  },
  "project-two": {
    title: "Project Name Two",
    summary: "One-line summary of what this does.",
    description:
      "Same structure — what the project does, what was actually hard about it, and what you'd improve.",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    metric: { value: "1.2k", label: "lines of Rust rewritten" },
    href: "https://github.com/CodingMaster123456/project-two",
    demo: null,
    image: "Screenshot: project-two.png",
    imageSrc: undefined,
  },
  "project-three": {
    title: "Project Name Three",
    summary: "One-line summary of what this does.",
    description:
      "Third project description. Even a smaller project reads well if you're honest about scope.",
    stack: ["Go", "Redis", "Docker"],
    metric: { value: "40ms", label: "p99 latency" },
    href: "https://github.com/CodingMaster123456/project-three",
    demo: null,
    image: "Screenshot: project-three.png",
    imageSrc: undefined,
  },
} as const;

function DetailLink({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink hover:text-signal underline decoration-line underline-offset-4"
    >
      {label}
    </a>
  );
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) notFound();

  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-3xl mx-auto">
      <Link
        href="/projects"
        className="font-mono text-sm text-graphite hover:text-signal transition-colors"
      >
        ← back to projects
      </Link>

      <div className="mt-8 mb-8">
        <PlaceholderImage label={project.image} src={project.imageSrc} aspect="aspect-video" />
      </div>

      <div className="flex items-start justify-between gap-4 mb-4">
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <div className="font-mono text-right shrink-0">
          <div className="text-signal text-xl font-medium">
            {project.metric.value}
          </div>
          <div className="text-xs text-graphite">{project.metric.label}</div>
        </div>
      </div>

      <p className="text-graphite leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex gap-2 flex-wrap mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2 py-1 bg-ink/5 rounded text-graphite"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 font-mono text-sm border-t border-line pt-6">
        <DetailLink url={project.href} label="view code →" />
        {project.demo && <DetailLink url={project.demo} label="live demo →" />}
      </div>
    </main>
  );
}