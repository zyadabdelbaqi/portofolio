import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const EMAIL = "hello@ziyad.dev";
const GITHUB_URL = "https://github.com/ziyad-abdulbaqi";
const LINKEDIN_URL = "https://www.linkedin.com/in/ziyad-abdulbaqi";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        {/* Header */}
        <div className="mb-8">
          <p className="font-mono text-xs uppercase tracking-wider text-neutral-400">
            05 — Contact
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-2 max-w-lg text-sm text-neutral-600">
            Available for remote roles and project work worldwide. Reach out —
            I respond within a day.
          </p>
        </div>

        {/* Contact + Social grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Email card */}
          <a
            href={`mailto:${EMAIL}`}
            className="card-hover group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <Mail strokeWidth={1.5} className="h-4 w-4" />
              </span>
              <ArrowUpRight
                strokeWidth={1.5}
                className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-neutral-900"
              />
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-400">Email</p>
            <p className="mt-1 text-sm font-medium text-neutral-900 break-all">
              {EMAIL}
            </p>
          </a>

          {/* GitHub card */}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <Github strokeWidth={1.5} className="h-4 w-4" />
              </span>
              <ArrowUpRight
                strokeWidth={1.5}
                className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-neutral-900"
              />
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-400">GitHub</p>
            <p className="mt-1 text-sm font-medium text-neutral-900">
              @ziyad-abdulbaqi
            </p>
          </a>

          {/* LinkedIn card */}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group rounded-lg border border-neutral-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-50 text-neutral-900">
                <Linkedin strokeWidth={1.5} className="h-4 w-4" />
              </span>
              <ArrowUpRight
                strokeWidth={1.5}
                className="h-4 w-4 text-neutral-300 transition-colors group-hover:text-neutral-900"
              />
            </div>
            <p className="mt-3 font-mono text-xs text-neutral-400">LinkedIn</p>
            <p className="mt-1 text-sm font-medium text-neutral-900">
              /in/ziyad-abdulbaqi
            </p>
          </a>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-neutral-100 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-neutral-400">
            © {year} Ziyad Abdulbaqi — All rights reserved.
          </p>
          <p className="font-mono text-xs text-neutral-400">
            Built with Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
