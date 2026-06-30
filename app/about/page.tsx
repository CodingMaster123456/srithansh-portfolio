import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <FadeIn>
        <>
          <p className="text-xs uppercase tracking-wide text-graphite mb-3">
            About
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-12">
            A bit about me
          </h1>
        </>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="mb-16">
          <div className="space-y-4 text-graphite leading-relaxed">
            <p>
              I&apos;m a computer science student at{" "}
              <span className="text-ink font-medium">
                Georgia Institute of Technology
              </span>{" "}
              focused on software engineering, distributed systems, and machine
              learning. I enjoy building products that combine strong backend
              engineering with practical AI.
            </p>

            <p>
              I&apos;m interested in taking ideas from prototype to production:
              designing scalable systems, optimizing performance, deploying ML
              models, and building reliable applications that people can
              actually use.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={200}>
        <section className="mb-16">
          <h2 className="text-xl font-semibold tracking-tight mb-6">
            Education
          </h2>

          <div className="border border-line rounded-xl p-6 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
            <div className="flex items-center gap-4">
              <img
                src="/gt-logo.png"
                alt="Georgia Tech"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h3 className="text-lg font-semibold">
                  Georgia Institute of Technology
                </h3>

                <p className="text-graphite">
                  B.S. Computer Science
                </p>
              </div>
            </div>

            <p className="text-graphite text-sm mt-4">
              Concentrations in Intelligence & Information Internetworks
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 pt-6 border-t border-line">
              <div>
                <p className="text-xs uppercase tracking-wide text-graphite">
                  GPA
                </p>

                <p className="font-semibold text-lg text-signal">
                  4.0 / 4.0
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-graphite">
                  Graduation
                </p>

                <p className="font-medium">
                  Dec 2028
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wide text-graphite">
                  College
                </p>

                <p className="font-medium">
                  College of Computing
                </p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={300}>
        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-6">
            Currently
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
              <p className="text-xs uppercase tracking-wide text-graphite mb-2">
                Software Engineering
              </p>

              <p className="font-medium">
                Backend systems & APIs
              </p>

              <p className="text-graphite text-sm mt-1">
                Building scalable applications
              </p>
            </div>

            <div className="border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
              <p className="text-xs uppercase tracking-wide text-graphite mb-2">
                Machine Learning
              </p>

              <p className="font-medium">
                Applied AI systems
              </p>

              <p className="text-graphite text-sm mt-1">
                Models from research to production
              </p>
            </div>

            <div className="border border-line rounded-xl p-5 transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-ink/30">
              <p className="text-xs uppercase tracking-wide text-graphite mb-2">
                Systems
              </p>

              <p className="font-medium">
                Distributed systems
              </p>

              <p className="text-graphite text-sm mt-1">
                Performance & infrastructure
              </p>
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}