"use client";

import React, { useEffect, useState } from "react";
import mermaid from "mermaid";
import { useTheme } from "next-themes";

export function Mermaid({ chart }: { chart: string }) {
  const [svgCode, setSvgCode] = useState<string>("");
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    mermaid.initialize({
      startOnLoad: false,
      theme: currentTheme === "dark" ? "dark" : "default",
      fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      securityLevel: "loose",
    });

    const id = "mermaid-svg-" + Math.random().toString(36).substring(2, 9);
    
    // Attempt to render the mermaid chart
    try {
      mermaid.render(id, chart).then((result) => {
        setSvgCode(result.svg);
      }).catch(e => {
        console.error("Mermaid parsing error", e);
      });
    } catch (e) {
      console.error("Mermaid execution error", e);
    }
  }, [chart, theme, systemTheme]);

  if (!svgCode) return null;

  return (
    <div
      className="flex justify-center overflow-x-auto p-6 rounded-xl border border-border bg-card shadow-sm my-10"
      dangerouslySetInnerHTML={{ __html: svgCode }}
    />
  );
}
