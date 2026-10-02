import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ziad Abdulbaqi — ATS Resume & Curriculum Vitae",
  description:
    "Curriculum Vitae of Ziad Abdulbaqi, Full-Stack Developer and SaaS Engineer. ATS-optimized with print and PDF export.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
