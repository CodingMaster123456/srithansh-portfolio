"use client";

import { useState } from "react";
import PlaceholderImage from "../components/PlaceholderImage";

const projects = [
  {
    title: "Project Name One",
    summary: "One-line summary of what this does.",
    description:
      "A fuller explanation of the problem, why it was hard, and the specific decisions you made.",
    stack: ["Python", "PyTorch", "FastAPI"],
    metric: { value: "94.2%", label: "eval accuracy" },
    href: "https://github.com/CodingMaster123456/project-one",
    demo: "https://project-one-demo.vercel.app",
    image: "Screenshot: project-one.png",
  },
  {
    title: "Project Name Two",
    summary: "One-line summary of what this does.",
    description:
      "Same structure — what the project does, what was actually hard about it, and what you'd improve.",
    stack: ["TypeScript", "Next.js", "PostgreSQL"],
    metric: { value: "1.2k", label: "lines of Rust rewritten" },
    href: "https://github.com/CodingMaster123456/project-two",
    demo: null,
    image: "Screenshot: project-two.png",
  },
  {
    title: "Project Name Three",
    summary: "One-line summary of what this does.",
    description:
      "Third project description. Even a smaller project reads well if you're honest about scope.",
    stack: ["Go", "Redis", "Docker"],
    metric: { value: "40ms", label: "p99 latency" },
    href: "https://github.com/CodingMaster123456/project-three",
    demo: null,
    image: "Screenshot: project-three.png",
  },
];

function ProjectLink({ url, label }: { url: string; label: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="text-ink hover:text-signal underline decoration-line underline-offset-4"
    >
      {label}
    </a>
  );
}

export default function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <p className="text-xs uppercase tracking-wide text-graphite mb-3">
        Projects
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
        Things I&apos;ve built
      </h1>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={project.title}
              className={`border rounded-xl overflow-hidden transition-all cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${
                isOpen ? "border-signal sm:col-span-2" : "border-line hover:border-ink/30"
              }`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="p-4">
                <PlaceholderImage label={project.image} />
              </div>

              <div className="px-4 pb-4 -mt-1">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h2 className="font-semibold text-base flex items-center gap-2">
                    <span className="font-mono text-xs text-graphite font-normal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </h2>
                  <svg
                    className={`w-4 h-4 text-graphite shrink-0 mt-0.5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
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
                <div className="font-mono text-xs mt-2">
                  <span className="text-signal font-medium">
                    {project.metric.value}
                  </span>{" "}
                  <span className="text-graphite">{project.metric.label}</span>
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 border-t border-line pt-4">
                  <p className="text-graphite leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2 py-1 bg-ink/5 rounded text-graphite"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 font-mono text-sm">
                    <ProjectLink url={project.href} label="view code →" />
                    {project.demo && (
                      <ProjectLink url={project.demo} label="live demo →" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}