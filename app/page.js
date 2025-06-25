import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Achievement from "./components/Achievement";
import Timeline from "./components/Timeline";
import BlogSection from "./components/BlogSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
     <div className="contanier mt-24 mx-auto px-12 py-4">
       <HeroSection />
       <AboutSection />
       <Achievement />
        <Timeline />
       <ProjectsSection />
       <BlogSection />
       <EmailSection />
     </div>
     <Footer />
    </main>
  );
}
