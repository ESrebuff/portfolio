import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectSection";
import Qualifications from "./components/Qualifications";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <NavBar />
      <div className="container mt-24 mx-auto px-2 md:px-20 py-4 ">
        <HeroSection />
        <div className="w-full border-t border-borderDark my-32"></div>
        <AboutSection />
        <div className="w-full border-t border-borderDark my-32"></div>
        <ProjectsSection />
        <div className="w-full border-t border-borderDark my-32"></div>
        <Qualifications />
        <div className="w-full border-t border-borderDark my-32"></div>
        <EmailSection />
        <Footer />
      </div>
    </main>
  );
}
