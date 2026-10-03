"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex items-center justify-center rounded-md border border-border p-1.5 opacity-0">
        <div className="h-3.5 w-3.5" />
      </div>
    );
  }

  const isDark = theme === "dark" || resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md border border-border bg-transparent p-1.5 text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun strokeWidth={1.5} className="h-3.5 w-3.5" />
      ) : (
        <Moon strokeWidth={1.5} className="h-3.5 w-3.5" />
      )}
    </button>
  );
}
