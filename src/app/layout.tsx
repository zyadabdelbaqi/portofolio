import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziyad Abdulbaqi — Full-Stack Developer & SaaS Builder",
  description:
    "Building scalable web applications, cloud-native SaaS platforms, and high-performance business solutions. Available for remote roles worldwide.",
  keywords: [
    "Ziyad Abdulbaqi",
    "Full-Stack Developer",
    "SaaS Builder",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
    "Web Applications",
  ],
  authors: [{ name: "Ziyad Abdulbaqi" }],
  openGraph: {
    title: "Ziyad Abdulbaqi — Full-Stack Developer & SaaS Builder",
    description:
      "Building scalable web applications, cloud-native SaaS platforms, and high-performance business solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyad Abdulbaqi — Full-Stack Developer & SaaS Builder",
    description:
      "Building scalable web applications, cloud-native SaaS platforms, and high-performance business solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
