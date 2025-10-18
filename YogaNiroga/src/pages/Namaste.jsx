import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { AboutSection } from "../components/AboutSection";
import { Testimonials } from "../components/Testimonials";
import Stats from "../components/Stats";
import TeacherSection from "../components/TeacherSection";
import Gallery from "../components/Gallery";
function Namaste() {
  return (
    <div >
      <Navbar />
      <main>
        <HeroSection />
        <Stats />
        <AboutSection />
        <TeacherSection />
        <Gallery />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Namaste;