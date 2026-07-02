import Nav from "./_components/nav";
import Hero from "./_components/hero";
import DeveloperIdentity from "./_components/developer-identity";
import SelectedWork from "./_components/selected-work";
import EduCenterCaseStudy from "./_components/educenter-case-study";
import UniStreamCaseStudy from "./_components/unistream-case-study";
import SystemDesign from "./_components/system-design";
import TechEcosystem from "./_components/tech-ecosystem";
import EngineeringPrinciples from "./_components/engineering-principles";
import Vision from "./_components/vision";
import Testimonials from "./_components/testimonials";
import Contact from "./_components/contact";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <DeveloperIdentity />
        <SelectedWork />
        <EduCenterCaseStudy />
        <UniStreamCaseStudy />
        <SystemDesign />
        <TechEcosystem />
        <EngineeringPrinciples />
        <Vision />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
