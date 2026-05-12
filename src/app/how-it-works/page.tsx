import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import BosIntro from "@/components/BosIntro";
import BosPin from "@/components/BosPin";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "How Senatio Builds Engineering Teams from India | Senatio",
  description:
    "Learn how Senatio builds, operates, and scales engineering teams from India through faster hiring, stronger operating structure, and reliable execution support.",
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

const flowSteps = [
  "Discovery and team design",
  "Role definition and hiring plan",
  "Candidate pipeline and selection",
  "Onboarding and launch",
  "Operating rhythm and reporting",
  "Ongoing support and scaling",
];

export default function HowItWorksPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="hiw-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  How Senatio works
                </p>
                <h2 className="section-title" id="hiw-hero-h">
                  Build, operate, and scale <em>with structure.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Hiring engineers is only one part of building engineering
                  capability from India. The real challenge is launching the team
                  well, giving it the right operating structure, and keeping
                  delivery on track as the team grows. Senatio is built to help
                  clients do all three.
                </p>
              </div>
            </div>
          </div>
        </section>

        <BosIntro />
        <BosPin />

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="flow-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="flow-h">
                  A typical engagement <em>flow.</em>
                </h2>
                <p className="section-lede">
                  Every engagement follows a structured path from discovery to
                  live team. The timeline varies, but the sequence stays
                  consistent.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "24px",
                paddingTop: "16px",
              }}
            >
              {flowSteps.map((step, i) => (
                <article
                  key={step}
                  style={{
                    borderTop: "1px solid var(--accent)",
                    paddingTop: "16px",
                  }}
                  data-reveal
                >
                  <p className="mono" style={{ marginBottom: "8px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.1rem",
                      margin: 0,
                      fontWeight: 380,
                    }}
                  >
                    {step}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="why-works-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-works-h">
                  Why this model <em>works.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                The Build, Operate, Scale model works because it matches how
                engineering teams actually succeed in practice. Clients do not
                only need access to engineers in India. They need a structured
                way to launch, run, and grow engineering capability from India
                without losing time, quality, or control.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px",
              }}
              data-reveal
            >
              <Link href="/contact" className="btn btn-primary">
                <span>Discuss your team design</span>
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
