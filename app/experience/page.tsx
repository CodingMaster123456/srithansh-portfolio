"use client";

import { useState } from "react";
import FadeIn from "../components/FadeIn";

const experiences = [
  {
    role: "Software Engineering Intern",
    org: "Company Name",
    period: "Summer 2026",
    summary: "One-line summary of what you did.",
    description:
      "A fuller explanation — what team you were on, what you built or shipped, and a concrete outcome or metric. Specificity is what makes this read as real experience rather than a generic bullet point.",
    stack: ["Python", "AWS", "PostgreSQL"],
  },
  {
    role: "Research Assistant",
    org: "Your University Lab Name",
    period: "Fall 2025 – Present",
    summary: "One-line summary of the research/work.",
    description:
      "Same structure — what the research question was, what your specific contribution was, and any concrete result (a paper, a benchmark, a tool other people in the lab now use).",
    stack: ["PyTorch", "NumPy", "Linux"],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <FadeIn>
        <p className="text-xs uppercase tracking-wide text-graphite mb-3">
          Experience
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
          Where I&apos;ve worked
        </h1>
      </FadeIn>

      <div className="flex flex-col gap-4">
        {experiences.map((exp, i) => {
          const isOpen = openIndex === i;
          return (
            <FadeIn key={exp.role} delay={i * 100}>
              <div
                className={`border rounded-xl p-6 cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md ${
                  isOpen ? "border-signal" : "border-line hover:border-ink/30"
                }`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2
                      className={`font-semibold transition-all flex items-center gap-3 ${
                        isOpen ? "text-signal text-xl" : "text-lg"
                      }`}
                    >
                      <span className="font-mono text-sm text-graphite font-normal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {exp.role}
                    </h2>
                    <p className="text-graphite">{exp.org}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <p className="font-mono text-sm text-graphite">
                      {exp.period}
                    </p>
                    <svg
                      className={`w-4 h-4 text-graphite transition-transform ${
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
                </div>
                <p className="text-graphite mt-2">{exp.summary}</p>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 mt-4" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-line pt-4">
                    <p className="text-graphite leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs px-2 py-1 bg-ink/5 rounded text-graphite"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </main>
  );
}