import Link from "next/link";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-12 sm:py-24 max-w-4xl mx-auto">
      <FadeIn>
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-6">
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-graphite mb-4">
                Software Engineer · AI/ML
              </p>

              <p className="text-graphite text-lg mb-2">
                Hello! I&apos;m
              </p>

              <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-6 leading-[1.05]">
                Srithansh
                <br />
                Mundlapudi
              </h1>

              <p className="text-lg text-graphite leading-relaxed max-w-xl mb-6">
                Computer science student at Georgia Tech building software
                systems and machine learning applications. Interested in
                engineering reliable, scalable products and currently seeking
                SWE/AI internships.
              </p>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-ink text-paper font-medium text-sm rounded-lg px-5 py-2.5 hover:bg-signal transition-colors"
              >
                View Projects →
              </Link>
            </div>

            <div className="shrink-0">
              <img
                src="/me.png"
                alt="Srithansh Mundlapudi"
                className="w-50 h-50 rounded-full object-cover border-2 border-line"
              />
            </div>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={100}>
        <section className="grid grid-cols-3 gap-4 mb-20 border-y border-line py-6">
          <div>
            <div className="font-mono text-2xl font-medium">
              B.S. CS
            </div>
            <div className="text-xs text-graphite uppercase tracking-wide mt-1">
              Georgia Tech
            </div>
          </div>

          <div>
            <div className="font-mono text-2xl font-medium">
              4.0 / 4.0
            </div>
            <div className="text-xs text-graphite uppercase tracking-wide mt-1">
              GPA
            </div>
          </div>

          <div>
            <div className="font-mono text-2xl font-medium">
              Dec 2028
            </div>
            <div className="text-xs text-graphite uppercase tracking-wide mt-1">
              Graduation
            </div>
          </div>
        </section>
      </FadeIn>
    </main>
  );
}