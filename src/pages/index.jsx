import HeroSection from "../components/landing_sections/Hero";
import AboutSection from "../components/landing_sections/About";
import Features from "../components/landing_sections/Features";
import Testimonials from "../components/landing_sections/Testimonials";
import CTA from "../components/landing_sections/CTA";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "../components/landing_sections/FooterSection";
export default function landing() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
