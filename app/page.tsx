import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

//! Add Email section
// ? Update projects, footer, navbar, and about me section

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects/>
      </div>
    </main>
  );
}
