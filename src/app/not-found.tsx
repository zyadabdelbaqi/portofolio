import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <div className="mx-auto max-w-md text-center">
        {/* Brand Logo */}
        <div className="flex justify-center mb-6">
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-black"
            aria-hidden="true"
          >
            <circle
              cx="256"
              cy="256"
              r="232"
              stroke="currentColor"
              strokeWidth="26"
              fill="none"
            />
            <path
              d="M136 131 H376 V191 L224 321 H376 V381 H136 V321 L288 191 H136 Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* 404 Status */}
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-400">
          404 — Page Not Found
        </p>
        
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
          Lost in space?
        </h1>
        
        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            <Home className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </Link>
          <Link
            href="/resume"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>View Resume</span>
          </Link>
        </div>

        <p className="mt-12 font-mono text-xs text-neutral-400">
          ziadabdelbaqi.dev
        </p>
      </div>
    </main>
  );
}
