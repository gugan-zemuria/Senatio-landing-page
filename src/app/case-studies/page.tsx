import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Proof from "@/components/Proof";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Case Studies — Speed & Execution | Senatio",
  description:
    "Senatio case studies show how global companies launch engineering teams from India faster, operate with discipline, and scale without losing control.",
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

const whatWeSolve = [
  "Need to launch engineering capacity quickly",
  "Need to reduce delivery friction after launch",
  "Need stronger visibility and operating rhythm",
  "Need to scale without operational chaos",
];

export default function CaseStudiesPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="cases-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Case Studies
                </p>
                <h2 className="section-title" id="cases-hero-h">
                  Proof of launch speed and <em>execution.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "64ch" }}>
                  Senatio is built for companies that need engineering capacity
                  quickly, but still want structure, continuity, execution
                  discipline, and control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="intro-h">
          <div className="wrap">
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Our work is measured by how quickly teams launch, how well they
                run, and how cleanly they scale. Each engagement is different,
                but the focus stays the same: practical execution, stronger
                delivery, and teams that hold together over time.
              </p>
            </div>
          </div>
        </section>

        <Proof />

        <section className="section" aria-labelledby="solve-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="solve-h">
                  What our work usually <em>solves.</em>
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {whatWeSolve.map((item, i) => (
                <article
                  key={item}
                  style={{
                    borderTop: "1px solid var(--accent)",
                    paddingTop: "14px",
                  }}
                  data-reveal
                >
                  <p className="mono" style={{ marginBottom: "6px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{ color: "var(--fg)", lineHeight: 1.5, margin: 0 }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>See how we work</span>
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
