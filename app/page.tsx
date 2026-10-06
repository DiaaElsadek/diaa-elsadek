import Nav from "./_components/nav";
import Hero from "./_components/hero";
import DeveloperIdentity from "./_components/developer-identity";
import ScrollRevealSection from "./_components/scroll-reveal-section";
import SelectedWork from "./_components/selected-work";
import Experience from "./_components/experience";
import TechEcosystem from "./_components/tech-ecosystem";
import Credentials from "./_components/credentials";
import Testimonials from "./_components/testimonials";
import Contact from "./_components/contact";
import Footer from "./_components/footer";
import ScrollToTop from "./_components/scroll-to-top";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DeveloperIdentity />
        <ScrollRevealSection />
        <SelectedWork />
        <Experience />
        <TechEcosystem />
        <Credentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
