import Loader from "@/components/Loader";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import KineticStripe from "@/components/KineticStripe";
import Positioning from "@/components/Positioning";
import BosIntro from "@/components/BosIntro";
import BosPin from "@/components/BosPin";
import WhySenatio from "@/components/WhySenatio";
import Ledger from "@/components/Ledger";
import Roles from "@/components/Roles";
import Pricing from "@/components/Pricing";
import Proof from "@/components/Proof";
import Faq from "@/components/Faq";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Loader />
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <KineticStripe />
        <Positioning />
        <div className="section-divider" />
        <BosIntro />
        <BosPin />
        <div className="section-divider" />
        <WhySenatio />
        <Ledger />
        <Roles />
        <Pricing />
        <Proof />
        <Faq />
        <About />
        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
