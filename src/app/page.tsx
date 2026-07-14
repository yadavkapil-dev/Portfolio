import PageWrapper from "./PageWrapper";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import ChatButton from "../components/ChatButton";
import Skills from "../components/Skills";
import About from "../components/About";
import Footer from "../components/Footer";
import Education from "../components/Education";
import Divider from "../components/ui/Divider";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* SAFE: wrapped in client animation */}
      <PageWrapper>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Education />
      </PageWrapper>

      {/* SAFE again */}
      <PageWrapper>
        <Divider />
        <Contact />
        <Footer />
      </PageWrapper>

      <ChatButton />
    </div>
  );
}
