import { Navbar } from "@/components/portfolio/navbar";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { Capabilities } from "@/components/portfolio/capabilities";
import { About } from "@/components/portfolio/about";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Capabilities />
        <About />
      </main>
      <Footer />
    </div>
  );
}
