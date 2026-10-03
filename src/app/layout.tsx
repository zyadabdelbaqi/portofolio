import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ziadabdelbaqi.dev"),
  title: "ziadabdelbaqi.dev — Full-Stack Developer & SaaS Builder",
  description:
    "Building scalable web applications, cloud-native SaaS platforms, and high-performance business solutions. Available for remote roles worldwide.",
  keywords: [
    "ziadabdelbaqi.dev",
    "Ziad Abdelbaqi",
    "Full-Stack Developer",
    "SaaS Builder",
    "Next.js",
    "TypeScript",
    "Cloud Architecture",
    "Web Applications",
  ],
  authors: [{ name: "ziadabdelbaqi.dev" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest?v=2",
  openGraph: {
    title: "ziadabdelbaqi.dev — Full-Stack Developer & SaaS Builder",
    description:
      "Building scalable web applications, cloud-native SaaS platforms, and high-performance business solutions.",
    url: "https://ziadabdelbaqi.dev",
    siteName: "ziadabdelbaqi.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ziadabdelbaqi.dev — Full-Stack Developer & SaaS Builder",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ziadabdelbaqi.dev — Full-Stack Developer & SaaS Builder",
    description:
      "Building scalable web applications, cloud-native SaaS platforms, and high-performance business solutions.",
    images: ["/og-image.png"],
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
        className={`${inter.variable} ${geistMono.variable} font-sans antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
