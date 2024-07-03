import Contact from "@/components/main/Contact";
import Email from "@/components/main/Email";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        {/* <Experience/> */}
        {/* <Email /> */}
        {/* <Contact /> */}
      </div>
    </main>
  );
}