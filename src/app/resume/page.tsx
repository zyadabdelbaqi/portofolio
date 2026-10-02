"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Printer, CheckCircle2, FileText, Info } from "lucide-react";

export default function ResumePage() {
  const [copied, setCopied] = useState(false);

  const plainText = `
ZIAD ABDULBAQI
Full-Stack Developer | SaaS Engineer
Al Mahallah al Kubra, Gharbiya, Egypt | (+20) 1204746971 | zyadzoiruwk@gmail.com
Portfolio: https://ziadabdelbaqi.dev | LinkedIn: https://linkedin.com/in/ziadabdelbaqi | GitHub: https://github.com/zyadabdelbaqi

SUMMARY
Full-Stack Developer and SaaS Engineer with a Bachelor's degree in Business Information Systems (BIS) and hands-on experience building and deploying production-ready web applications and multi-tenant SaaS platforms. Proficient in Next.js, React, TypeScript, JavaScript, PostgreSQL, Supabase, Docker, Cloudflare R2, and Debian Linux. Strong technical focus on multi-tenant architecture, scalable backend systems, asynchronous background processing, media stream automation, and product-driven cloud deployment.

TECHNICAL SKILLS
Languages: JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
Frontend: React, Next.js (App Router), TanStack Start, Tailwind CSS, Canvas API, WebGPU, PWA
Backend: Node.js, RESTful APIs, PostgreSQL, Supabase, BullMQ, Background Job Processing
Cloud & Infrastructure: Docker, Debian Linux, VPS Administration, Cloudflare R2, Vercel, Edge Computing
Architecture & Systems: SaaS Architecture, Multi-Tenant Systems, Database Design, Media Processing (FFmpeg, RTMP, Live Streaming), AI API Integration (Gemini AI)

SELECTED PROJECTS
TARTEEL STUDIO | Full-Stack / SaaS Developer
Tech Stack: JavaScript, Tailwind CSS, Canvas API, Vercel Edge Computing
• Architected and launched a multimedia SaaS platform for automated Quranic video generation with a zero-infrastructure-cost approach.
• Engineered client-side audio-visual synchronization and browser-based video rendering workflows to eliminate server compute costs.
• Optimized application architecture to minimize server-side processing and reduce infrastructure overhead.
• Implemented code obfuscation and proprietary security safeguards to protect core application logic.

AMTDAD | Full-Stack Developer
Tech Stack: Next.js, TypeScript, PostgreSQL, Supabase, Cloudflare R2
• Built a scalable multi-tenant e-commerce SaaS platform enabling merchants to deploy fully customized online storefronts.
• Designed a secure tenant-isolated architecture featuring inventory management, product catalogs, and customizable dynamic themes.
• Integrated PostgreSQL/Supabase for relational application data and Cloudflare R2 for high-throughput media asset storage.
• Streamlined order fulfillment workflows by implementing direct WhatsApp messaging integrations for seller-buyer conversion.

KAYANSTREAM | Full-Stack / Infrastructure Engineer
Tech Stack: Next.js, TypeScript, FFmpeg, BullMQ, Cloudflare R2, Docker, Debian Linux, RTMP
• Engineered a 24/7 automated live-streaming SaaS platform delivering continuous video feeds to YouTube and RTMP destinations.
• Designed asynchronous background processing queues using BullMQ and custom FFmpeg video processing pipelines.
• Administered and deployed containerized services using Docker on Debian Linux VPS infrastructure for maximum uptime and stability.
• Integrated Cloudflare R2 for scalable video and media storage.

ELFORMA | Full-Stack Developer
Tech Stack: TanStack Start, TypeScript, Tailwind CSS, Supabase, PWA
• Developed a comprehensive gym management SaaS platform featuring multi-branch administration and subscription tracking.
• Built real-time operations dashboards and subscription lifecycle management workflows.
• Implemented Progressive Web App (PWA) capabilities for seamless cross-device mobile and desktop access.
• Integrated Supabase for authentication, backend services, and real-time data management.

SIRASHARE | Full-Stack Developer
Tech Stack: JavaScript, Tailwind CSS, Supabase, Gemini AI API
• Created an interactive CV and portfolio builder with instant public-link sharing and bilingual (Arabic/English) support.
• Integrated Google Gemini AI API to provide automated ATS resume analysis and real-time optimization suggestions.
• Developed structured CV-generation workflows focused on machine-readable resume content.

EDUCATION
Bachelor of Science in Business Information Systems (BIS)
Misr Higher Institute for Commerce and Computers (El-Sallab Academy) | Expected Graduation: 2026

LANGUAGES
Arabic: Native | English: Professional Working Proficiency
`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(plainText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 pb-12 font-sans">
      <style jsx global>{`
        @media screen {
          .a4-page {
            width: 210mm;
            min-height: 297mm;
            padding: 18mm 20mm;
            margin: 20px auto;
            background: #ffffff;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
              0 8px 10px -6px rgba(0, 0, 0, 0.05);
            box-sizing: border-box;
            border-radius: 2px;
          }
        }

        .section-header {
          border-bottom: 1.5px solid #111827;
          padding-bottom: 3px;
          margin-bottom: 10px;
          margin-top: 18px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          font-size: 0.95rem;
          color: #111827;
        }

        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 15mm 12mm 15mm;
          }

          body {
            background: #ffffff !important;
            color: #000000 !important;
            font-size: 10.5pt;
          }

          .no-print {
            display: none !important;
          }

          .a4-page {
            width: 100% !important;
            min-height: auto !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border: none !important;
          }

          a {
            color: #000000 !important;
            text-decoration: none !important;
          }

          .section-header {
            border-bottom: 1.5px solid #000000 !important;
            color: #000000 !important;
            page-break-after: avoid;
          }

          .project-block,
          .job-block {
            page-break-inside: avoid;
          }
        }
      `}</style>

      {/* Top Action Bar (Hidden when printing) */}
      <header className="no-print sticky top-0 z-50 w-full border-b border-neutral-800 bg-neutral-900 text-white shadow-md">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="flex items-center gap-1.5 text-xs font-medium text-neutral-400 transition hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Portfolio</span>
            </Link>
            <span className="text-neutral-700">|</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-800 text-white">
              <FileText className="h-4 w-4" />
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">
                Curriculum Vitae (ATS Optimized)
              </h1>
              <p className="text-[11px] text-neutral-400">
                Ziad Abdulbaqi | Full-Stack Developer &amp; SaaS Engineer
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-xs font-medium text-neutral-200 transition hover:bg-neutral-700"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-950 shadow transition hover:bg-neutral-200"
            >
              <Printer className="h-3.5 w-3.5" />
              <span>Save as PDF / Print</span>
            </button>
          </div>
        </div>
      </header>

      {/* Instructions banner for user */}
      <div className="no-print mx-auto mt-4 max-w-5xl px-4">
        <div className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50/80 p-3 text-xs text-blue-900">
          <Info className="h-4 w-4 shrink-0 text-blue-600" />
          <span>
            <strong>Tips for saving PDF:</strong> In the print preview window, set{" "}
            <em>Destination</em> to <strong>&ldquo;Save as PDF&rdquo;</strong>, select{" "}
            <em>Paper Size</em> as <strong>&ldquo;A4&rdquo;</strong>, set <em>Margins</em> to{" "}
            <strong>&ldquo;None&rdquo; or &ldquo;Default&rdquo;</strong>, and uncheck{" "}
            <em>&ldquo;Headers and footers&rdquo;</em>.
          </span>
        </div>
      </div>

      {/* MAIN RESUME DOCUMENT (A4 Size Printable Canvas) */}
      <main id="resumeContent" className="a4-page text-[10.5pt] leading-relaxed text-neutral-900">
        {/* HEADER SECTION */}
        <header className="mb-4 text-center">
          <h1 className="mb-1 text-2xl font-bold uppercase tracking-tight text-black">
            ZIAD ABDULBAQI
          </h1>
          <p className="mb-2 text-sm font-semibold tracking-wide text-neutral-800">
            Full-Stack Developer | SaaS Engineer
          </p>

          {/* Contact Information Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[9.5pt] text-neutral-700">
            <span>Al Mahallah al Kubra, Gharbiya, Egypt</span>
            <span className="text-neutral-400">•</span>
            <span>(+20) 1204746971</span>
            <span className="text-neutral-400">•</span>
            <a href="mailto:zyadzoiruwk@gmail.com" className="text-black hover:underline">
              zyadzoiruwk@gmail.com
            </a>
          </div>

          {/* Links Line */}
          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[9.5pt] font-medium text-neutral-800">
            <a
              href="https://ziadabdelbaqi.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Portfolio: ziadabdelbaqi.dev
            </a>
            <span className="text-neutral-400">•</span>
            <a
              href="https://linkedin.com/in/ziadabdelbaqi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn: linkedin.com/in/ziadabdelbaqi
            </a>
            <span className="text-neutral-400">•</span>
            <a
              href="https://github.com/zyadabdelbaqi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub: github.com/zyadabdelbaqi
            </a>
          </div>
        </header>

        {/* PROFESSIONAL SUMMARY */}
        <section className="mb-4">
          <h2 className="section-header">PROFESSIONAL SUMMARY</h2>
          <p className="text-justify text-neutral-800">
            Full-Stack Developer and SaaS Engineer with a Bachelor&apos;s degree in Business
            Information Systems (BIS) and hands-on experience building and deploying
            production-ready web applications and multi-tenant SaaS platforms. Proficient in{" "}
            <strong>
              Next.js, React, TypeScript, JavaScript, PostgreSQL, Supabase, Docker, Cloudflare R2,
              and Debian Linux
            </strong>
            . Strong technical focus on multi-tenant architecture, scalable backend systems,
            asynchronous background processing, media stream automation, and product-driven cloud
            deployment.
          </p>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mb-4">
          <h2 className="section-header">TECHNICAL SKILLS</h2>
          <div className="space-y-1.5 text-neutral-800">
            <p>
              <strong>Languages:</strong> JavaScript (ES6+), TypeScript, SQL, HTML5, CSS3
            </p>
            <p>
              <strong>Frontend Development:</strong> React, Next.js (App Router), TanStack Start,
              Tailwind CSS, Canvas API, WebGPU, Progressive Web Apps (PWA)
            </p>
            <p>
              <strong>Backend Development:</strong> Node.js, RESTful APIs, PostgreSQL, Supabase,
              BullMQ, Background Job Processing
            </p>
            <p>
              <strong>Cloud &amp; Infrastructure:</strong> Docker, Debian Linux, VPS Administration,
              Cloudflare R2, Vercel, Edge Computing
            </p>
            <p>
              <strong>Architecture &amp; Systems:</strong> SaaS Architecture, Multi-Tenant Systems,
              Database Design, Media Processing (FFmpeg, RTMP, Live Streaming), AI API Integration
              (Gemini AI)
            </p>
          </div>
        </section>

        {/* SELECTED PROJECTS */}
        <section className="mb-4">
          <h2 className="section-header">SELECTED PROJECTS &amp; PRODUCTION EXPERIENCE</h2>

          <div className="space-y-4">
            {/* PROJECT 1: TARTEEL STUDIO */}
            <div className="project-block">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[11pt] font-bold text-black">
                  TARTEEL STUDIO{" "}
                  <span className="text-[10pt] font-normal text-neutral-700">
                    | Full-Stack / SaaS Developer
                  </span>
                </h3>
              </div>
              <p className="mb-1.5 text-xs font-medium italic text-neutral-600">
                Tech Stack: JavaScript, Tailwind CSS, Canvas API, Vercel Edge Computing
              </p>
              <ul className="ml-4 list-outside list-disc space-y-1 text-neutral-800">
                <li>
                  Architected and launched a multimedia SaaS platform for automated Quranic video
                  generation with a zero-infrastructure-cost approach.
                </li>
                <li>
                  Engineered client-side audio-visual synchronization and browser-based video
                  rendering workflows to eliminate server compute costs.
                </li>
                <li>
                  Optimized application architecture to minimize server-side processing and reduce
                  infrastructure overhead.
                </li>
                <li>
                  Implemented code obfuscation and proprietary security safeguards to protect core
                  application logic.
                </li>
              </ul>
            </div>

            {/* PROJECT 2: AMTDAD */}
            <div className="project-block">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[11pt] font-bold text-black">
                  AMTDAD{" "}
                  <span className="text-[10pt] font-normal text-neutral-700">
                    | Full-Stack Developer
                  </span>
                </h3>
              </div>
              <p className="mb-1.5 text-xs font-medium italic text-neutral-600">
                Tech Stack: Next.js, TypeScript, PostgreSQL, Supabase, Cloudflare R2
              </p>
              <ul className="ml-4 list-outside list-disc space-y-1 text-neutral-800">
                <li>
                  Built a scalable multi-tenant e-commerce SaaS platform enabling merchants to
                  deploy fully customized online storefronts.
                </li>
                <li>
                  Designed a secure tenant-isolated architecture featuring inventory management,
                  product catalogs, and customizable dynamic themes.
                </li>
                <li>
                  Integrated PostgreSQL/Supabase for relational application data and Cloudflare R2
                  for high-throughput media asset storage.
                </li>
                <li>
                  Streamlined order fulfillment workflows by implementing direct WhatsApp
                  messaging integrations for seller-buyer conversion.
                </li>
              </ul>
            </div>

            {/* PROJECT 3: KAYANSTREAM */}
            <div className="project-block">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[11pt] font-bold text-black">
                  KAYANSTREAM{" "}
                  <span className="text-[10pt] font-normal text-neutral-700">
                    | Full-Stack / Infrastructure Engineer
                  </span>
                </h3>
              </div>
              <p className="mb-1.5 text-xs font-medium italic text-neutral-600">
                Tech Stack: Next.js, TypeScript, FFmpeg, BullMQ, Cloudflare R2, Docker, Debian Linux,
                RTMP
              </p>
              <ul className="ml-4 list-outside list-disc space-y-1 text-neutral-800">
                <li>
                  Engineered a 24/7 automated live-streaming SaaS platform delivering continuous
                  video feeds to YouTube and RTMP destinations.
                </li>
                <li>
                  Designed asynchronous background processing queues using BullMQ and custom FFmpeg
                  video processing pipelines.
                </li>
                <li>
                  Administered and deployed containerized services using Docker on Debian Linux VPS
                  infrastructure for maximum uptime and stability.
                </li>
                <li>Integrated Cloudflare R2 for scalable video and media storage.</li>
              </ul>
            </div>

            {/* PROJECT 4: ELFORMA */}
            <div className="project-block">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[11pt] font-bold text-black">
                  ELFORMA{" "}
                  <span className="text-[10pt] font-normal text-neutral-700">
                    | Full-Stack Developer
                  </span>
                </h3>
              </div>
              <p className="mb-1.5 text-xs font-medium italic text-neutral-600">
                Tech Stack: TanStack Start, TypeScript, Tailwind CSS, Supabase, PWA
              </p>
              <ul className="ml-4 list-outside list-disc space-y-1 text-neutral-800">
                <li>
                  Developed a comprehensive gym management SaaS platform featuring multi-branch
                  administration and subscription tracking.
                </li>
                <li>
                  Built real-time operations dashboards and subscription lifecycle management
                  workflows.
                </li>
                <li>
                  Implemented Progressive Web App (PWA) capabilities for seamless cross-device
                  mobile and desktop access.
                </li>
                <li>
                  Integrated Supabase for authentication, backend services, and real-time data
                  management.
                </li>
              </ul>
            </div>

            {/* PROJECT 5: SIRASHARE */}
            <div className="project-block">
              <div className="flex items-baseline justify-between">
                <h3 className="text-[11pt] font-bold text-black">
                  SIRASHARE{" "}
                  <span className="text-[10pt] font-normal text-neutral-700">
                    | Full-Stack Developer
                  </span>
                </h3>
              </div>
              <p className="mb-1.5 text-xs font-medium italic text-neutral-600">
                Tech Stack: JavaScript, Tailwind CSS, Supabase, Gemini AI API
              </p>
              <ul className="ml-4 list-outside list-disc space-y-1 text-neutral-800">
                <li>
                  Created an interactive CV and portfolio builder with instant public-link sharing
                  and bilingual (Arabic/English) support.
                </li>
                <li>
                  Integrated Google Gemini AI API to provide automated ATS resume analysis and
                  real-time optimization suggestions.
                </li>
                <li>
                  Developed structured CV-generation workflows focused on machine-readable resume
                  content.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-4">
          <h2 className="section-header">EDUCATION</h2>
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-[10.5pt] font-bold text-black">
                Bachelor of Science in Business Information Systems (BIS)
              </h3>
              <p className="text-xs text-neutral-700">
                Misr Higher Institute for Commerce and Computers (El-Sallab Academy)
              </p>
            </div>
            <div className="text-right text-xs font-medium text-neutral-700">
              <span>Expected Graduation: 2026</span>
            </div>
          </div>
        </section>

        {/* LANGUAGES */}
        <section className="mb-2">
          <h2 className="section-header">LANGUAGES</h2>
          <p className="text-neutral-800">
            <strong>Arabic:</strong> Native <span className="mx-1 text-neutral-400">•</span>{" "}
            <strong>English:</strong> Professional Working Proficiency
          </p>
        </section>
      </main>
    </div>
  );
}
