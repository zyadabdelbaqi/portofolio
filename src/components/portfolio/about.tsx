import { GraduationCap, Sparkles, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        {/* Header */}
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
            04 — About
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            About &amp; Mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          {/* Left — narrative */}
          <div className="md:col-span-3">
            <p className="text-base leading-relaxed text-neutral-700">
              I come from a{" "}
              <span className="font-medium text-neutral-900">
                Business Information Systems (BIS)
              </span>{" "}
              background — a discipline that lives at the intersection of how
              companies operate and how software gets built. That dual lens lets
              me reason about real business logic first, then translate it into
              clean, well-bounded engineering.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              I work as a product-minded builder: I take ownership from
              architecture through to the last pixel. Whether it&apos;s a
              multi-tenant SaaS, an offline-first mobile workflow, or a live
              media pipeline on a Debian VPS, my goal is the same — ship a
              coherent, performant product that holds up under real usage.
            </p>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Modern AI workflows and cloud infrastructure let me operate
              autonomously across the stack. I leverage them to compress the
              distance between an idea and a working deployment — without
              sacrificing the engineering rigor that keeps systems maintainable
              over time.
            </p>
          </div>

          {/* Right — principle cards */}
          <div className="md:col-span-2">
            <ul className="flex flex-col gap-3">
              <li className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <GraduationCap strokeWidth={1.5} className="h-4 w-4 text-neutral-900" />
                  <p className="font-mono text-xs font-medium text-neutral-900">
                    BIS Background
                  </p>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Bridges business logic with clean software engineering.
                </p>
              </li>
              <li className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Rocket strokeWidth={1.5} className="h-4 w-4 text-neutral-900" />
                  <p className="font-mono text-xs font-medium text-neutral-900">
                    End-to-End Shipping
                  </p>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  From architecture to deployment — autonomous, product-minded
                  delivery.
                </p>
              </li>
              <li className="rounded-lg border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2">
                  <Sparkles strokeWidth={1.5} className="h-4 w-4 text-neutral-900" />
                  <p className="font-mono text-xs font-medium text-neutral-900">
                    AI-Workflow Native
                  </p>
                </div>
                <p className="mt-2 text-sm text-neutral-600">
                  Modern tooling and cloud infra to compress time-to-deploy.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
