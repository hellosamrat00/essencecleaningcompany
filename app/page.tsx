import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import StatsBanner from "@/components/StatsBanner";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Marquee />
      <About />
      <StatsBanner />
      <FAQ />
      <HowItWorks />
      <Testimonials />

      <Footer />
    </main>
  );
}
