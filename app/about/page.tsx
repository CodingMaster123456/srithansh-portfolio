

export default function About() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <p className="text-xs uppercase tracking-wide text-graphite mb-3">
        About
      </p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
        A bit about me
      </h1>

      {/* Photo + intro side by side */}
      <section className="flex flex-col sm:flex-row gap-8 mb-16">
        
        <div className="space-y-4 text-graphite leading-relaxed">
          <p>
            I&apos;m a computer science student at{" "}
            <span className="text-ink font-medium">Georgia Institute of Technology</span>
            , focused on software engineering and machine learning. I like
            building things that actually work end to end — not just
            notebooks that run once on someone&apos;s laptop.
          </p>
          <p>
            Most of what I build sits somewhere between systems and ML:
            getting a model from a research idea into something served, fast,
            and reliable. I&apos;m drawn to problems where the engineering is
            as hard as the modeling.
          </p>
        </div>
      </section>

      {/* Education — horizontal card like the projects */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold tracking-tight mb-6">
          Education
        </h2>
        <div className="flex flex-col sm:flex-row gap-5 border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
          
          <div className="flex flex-col justify-center py-1">
            <h3 className="font-semibold text-lg">Georgia Institute of Technology</h3>
            <p className="text-graphite">College of Computing</p>
            <p className="font-mono text-sm text-signal mt-2">Graduating Dec 2028</p>
            <p className="text-graphite text-sm mt-2">
              B.S. Computer Science — Concentrations in Intelligence and Information Internetworks
            </p>
          </div>
        </div>
      </section>

      {/* Currently — restyled as a clean stat-style row, not bullets */}
      <section>
        <h2 className="text-xl font-semibold tracking-tight mb-6">
          Currently
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
            <p className="text-xs uppercase tracking-wide text-graphite mb-2">
              Studying
            </p>
            <p className="font-medium">B.S. Computer Science</p>
            <p className="text-graphite text-sm mt-1">Expected 2028</p>
          </div>
          <div className="border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
            <p className="text-xs uppercase tracking-wide text-graphite mb-2">
              Looking for
            </p>
            <p className="font-medium">SWE & AI/ML internships</p>
            <p className="text-graphite text-sm mt-1">Summer 2027</p>
          </div>
          <div className="border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
            <p className="text-xs uppercase tracking-wide text-graphite mb-2">
              Learning
            </p>
            <p className="font-medium">Distributed systems</p>
            <p className="text-graphite text-sm mt-1">Transformer internals</p>
          </div>
        </div>
      </section>
    </main>
  );
}