import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "About Senatio — Operator-Led Engineering Capability",
  description:
    "Senatio helps global companies build real engineering capability from India with more structure, more speed, and less operational friction.",
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

export default function AboutPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="about-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  About Senatio
                </p>
                <h2 className="section-title" id="about-hero-h">
                  About <em>Senatio.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "60ch" }}>
                  Senatio is an operator-led partner for global companies building
                  engineering teams from India.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="why-exist-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <h2 className="section-title" id="why-exist-h">
                  Why we <em>exist.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Building from India is easy to talk about and much harder to
                execute well. Hiring is only one part of the challenge. The real
                challenge is launching the team properly, creating the right
                operating structure, and scaling without losing quality or
                control.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="focus-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="focus-h">
                  What we <em>focus on.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Senatio is focused on launch speed, execution discipline, and
                scalable engineering capability. We help clients move from hiring
                intent to a real engineering team that runs well and grows
                cleanly over time.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="think-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="think-h">
                  How we <em>think.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                The strongest engineering teams are not built through random
                hiring bursts or loose seat filling. They are built through
                clearer team design, stronger operating rhythm, and practical
                execution support. That is the gap Senatio is built to solve.
              </p>
            </div>
            <div style={{ marginTop: "24px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us</span>
                <BtnArrow />
              </Link>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
