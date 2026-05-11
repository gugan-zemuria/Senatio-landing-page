import type { Metadata } from "next";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "FAQ on Building Engineering Teams from India | Senatio",
  description:
    "Answers to common questions about building engineering teams from India, managed execution, team pricing, workflow improvement, and scaling with Senatio.",
};

export default function FaqPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="faq-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  FAQ
                </p>
                <h2 className="section-title" id="faq-hero-h">
                  Frequently asked <em>questions.</em>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
