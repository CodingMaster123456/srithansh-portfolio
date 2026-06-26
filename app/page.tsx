import Link from "next/link";
import FadeIn from "./components/FadeIn";

const featuredProjects = [
  {
    title: "Project Name One",
    summary: "One-line summary of what this does.",
    metric: { value: "94.2%", label: "eval accuracy" },
    href: "/projects",
  },
  {
    title: "Project Name Two",
    summary: "One-line summary of what this does.",
    metric: { value: "1.2k", label: "lines rewritten" },
    href: "/projects",
  },
  {
    title: "Project Name Three",
    summary: "One-line summary of what this does.",
    metric: { value: "40ms", label: "p99 latency" },
    href: "/projects",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <FadeIn>
        <section className="mb-16">
          <p className="text-xs uppercase tracking-wide text-graphite mb-4">
            Software Engineer · AI/ML
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6 leading-[1.05]">
            Srithansh
            <br />
            Mundlapudi
          </h1>
          <p className="text-lg text-graphite leading-relaxed max-w-xl">
            Computer science student building things at the intersection of
            software systems and machine learning. Currently looking for
            internships where I can ship real code.
          </p>
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="grid grid-cols-3 gap-4 mb-20 border-y border-line py-6">
          <div>
            <div className="font-mono text-2xl font-medium">3</div>
            <div className="text-xs text-graphite uppercase tracking-wide mt-1">
              Projects shipped
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl font-medium">2027</div>
            <div className="text-xs text-graphite uppercase tracking-wide mt-1">
              Graduating
            </div>
          </div>
          <div>
            <div className="font-mono text-2xl font-medium">SWE/ML</div>
            <div className="text-xs text-graphite uppercase tracking-wide mt-1">
              Seeking internship
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={150}>
        <section className="mb-16">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-xl font-semibold tracking-tight">
              Featured work
            </h2>
            <Link
              href="/projects"
              className="text-sm font-mono text-graphite hover:text-signal transition-colors"
            >
              view all →
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            {featuredProjects.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group flex flex-col justify-between border border-line rounded-xl p-5 hover:border-ink/30 transition-colors"
              >
                <div>
                  <h3 className="font-semibold text-lg group-hover:text-signal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-graphite mt-1">{project.summary}</p>
                </div>
                <div className="font-mono text-sm mt-4">
                  <span className="text-signal font-medium">
                    {project.metric.value}
                  </span>{" "}
                  <span className="text-graphite">{project.metric.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </FadeIn>

      <footer className="pt-8 border-t border-line">
        <p className="font-mono text-xs text-graphite">
          built with next.js + tailwind — last updated {new Date().getFullYear()}
        </p>
      </footer>
    </main>
  );
}