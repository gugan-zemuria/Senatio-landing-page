import Loader from "@/components/Loader";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import BosIntro from "@/components/BosIntro";
import BosPin from "@/components/BosPin";
import Ledger from "@/components/Ledger";
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
        <Positioning />
        <div className="section-divider" />
        <BosIntro />
        <BosPin />
        <div className="section-divider" />
        <Ledger />
        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
