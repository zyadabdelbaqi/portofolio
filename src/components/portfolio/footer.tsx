"use client";

import { Mail, Github, Linkedin, ArrowUpRight, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { useState } from "react";

const EMAIL = "zyadzoiruwk@gmail.com";
const GITHUB_URL = "https://github.com/zyadabdelbaqi";
const LINKEDIN_URL = "https://www.linkedin.com/in/ziadabdelbaqi";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          
          {/* Left: Header & Form */}
          <div>
            <FadeIn delay={0.1}>
              <div className="mb-8">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  05 — Contact
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  Let&apos;s build something.
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  Available for remote roles and project work worldwide. Drop a quick message below or connect via socials.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ContactForm />
            </FadeIn>
          </div>

          {/* Right: Social grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {/* Email card */}
            <FadeIn delay={0.3}>
              <a
                href={`mailto:${EMAIL}`}
                className="card-hover group flex h-full flex-col rounded-lg border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted text-foreground">
                    <Mail strokeWidth={1.5} className="h-4 w-4" />
                  </span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-foreground"
                  />
                </div>
                <div className="mt-auto pt-6">
                  <p className="font-mono text-xs text-muted-foreground">Email</p>
                  <p className="mt-1 text-sm font-medium text-foreground break-all">
                    {EMAIL}
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* GitHub card */}
            <FadeIn delay={0.4}>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex h-full flex-col rounded-lg border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted text-foreground">
                    <Github strokeWidth={1.5} className="h-4 w-4" />
                  </span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-foreground"
                  />
                </div>
                <div className="mt-auto pt-6">
                  <p className="font-mono text-xs text-muted-foreground">GitHub</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    @zyadabdelbaqi
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* LinkedIn card */}
            <FadeIn delay={0.5}>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group flex h-full flex-col rounded-lg border border-border bg-background p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-muted text-foreground">
                    <Linkedin strokeWidth={1.5} className="h-4 w-4" />
                  </span>
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-foreground"
                  />
                </div>
                <div className="mt-auto pt-6">
                  <p className="font-mono text-xs text-muted-foreground">LinkedIn</p>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    /in/ziadabdelbaqi
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>

        {/* Bottom strip */}
        <FadeIn delay={0.6}>
          <div className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 sm:flex-row">
            <p className="font-mono text-xs text-muted-foreground">
              © {year} ziadabdelbaqi.dev — All rights reserved.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Built with Next.js · TypeScript · Tailwind CSS
            </p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const formData = new FormData(e.currentTarget);
    
    // Use environment variable for the access key
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    
    if (!accessKey) {
      console.error("Web3Forms access key is missing. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your .env.local file.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="How can we help?"
          className="w-full resize-none rounded-md border border-border bg-muted/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
        />
      </div>
      
      {/* Honeypot Spam Protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90 disabled:opacity-70"
      >
        {status === "idle" && (
          <>
            Send Message
            <Send strokeWidth={1.5} className="h-4 w-4" />
          </>
        )}
        {status === "submitting" && "Sending..."}
        {status === "success" && (
          <>
            Sent Successfully!
            <CheckCircle2 strokeWidth={1.5} className="h-4 w-4" />
          </>
        )}
        {status === "error" && (
          <>
            Failed to send
            <AlertCircle strokeWidth={1.5} className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
