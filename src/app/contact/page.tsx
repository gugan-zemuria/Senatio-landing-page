import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Contact Senatio | Build Your Engineering Team from India",
  description:
    "Talk to Senatio about building, operating, improving, or scaling your engineering team from India with managed execution and lower delivery friction.",
};

const BtnArrow = () => (
  <svg
    className="btn-arrow"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ContactPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="contact-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Contact
                </p>
                <h2 className="section-title" id="contact-hero-h">
                  Talk to us about your <em>engineering team.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "60ch" }}>
                  If you are exploring how to build, operate, improve, or scale
                  your engineering team from India, Senatio can help. Talk to us
                  about team structure, launch timelines, operating support,
                  workflow improvement, and commercial structure.
                </p>
              </div>
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <a href="mailto:hello@senatio.com" className="btn btn-primary">
                <span>Book a call</span>
                <BtnArrow />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
