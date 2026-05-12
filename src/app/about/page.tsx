import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "About Senatio | Engineering Teams from India",
  description:
    "Learn about Senatio's operator-led approach to helping global companies build, operate, and scale engineering teams from India with stronger execution and less friction.",
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
        {/* ── Hero ── */}
        <section className="section" aria-labelledby="about-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  About Senatio
                </p>
                <h2 className="section-title" id="about-hero-h">
                  An operator-led partner for global companies building
                  engineering teams <em>from India.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio is an operator-led partner for global companies building
                  engineering teams from India. We help clients move from hiring
                  intent to a real engineering team that runs well and grows
                  cleanly over time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Core beliefs — 3-column grid ── */}
        <section
          className="section about-section"
          aria-labelledby="beliefs-h"
        >
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="beliefs-h">
                  What drives <em>Senatio.</em>
                </h2>
              </div>
            </div>

            <div className="about-grid" data-reveal>
              <div>
                <p
                  className="mono"
                  style={{ marginBottom: "12px", color: "var(--accent)" }}
                >
                  Why we exist
                </p>
                <p>
                  Building from India is easy to talk about and much harder to
                  execute well. Hiring is only one part of the challenge. The real
                  challenge is launching the team properly, creating the right
                  operating structure, and scaling without losing quality or
                  control.
                </p>
              </div>
              <div>
                <p
                  className="mono"
                  style={{ marginBottom: "12px", color: "var(--accent)" }}
                >
                  What we focus on
                </p>
                <p>
                  Senatio is focused on launch speed, execution discipline, and
                  scalable engineering capability. We help clients move from hiring
                  intent to a real engineering team that runs well and grows
                  cleanly over time.
                </p>
              </div>
              <div>
                <p
                  className="mono"
                  style={{ marginBottom: "12px", color: "var(--accent)" }}
                >
                  How we think
                </p>
                <p>
                  The strongest engineering teams are not built through random
                  hiring bursts or loose seat filling. They are built through
                  clearer team design, stronger operating rhythm, and practical
                  execution support. That is the gap Senatio is built to solve.
                </p>
              </div>
            </div>

            <div
              style={{
                marginTop: "48px",
                paddingTop: "32px",
                borderTop: "1px solid var(--line)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(24px, 4vw, 64px)",
                alignItems: "start",
              }}
              data-reveal
            >
              <div>
                <p
                  className="mono"
                  style={{ marginBottom: "12px", color: "var(--accent)" }}
                >
                  What kind of partner Senatio is
                </p>
              </div>
              <div>
                <p
                  style={{
                    color: "var(--fg-2)",
                    lineHeight: 1.65,
                    fontSize: "1.05rem",
                    margin: "0 0 24px 0",
                  }}
                >
                  Senatio is not trying to be a broad consulting brand. It is a
                  focused partner for companies that want engineering capability
                  from India with more speed, more structure, and less operational
                  drag. That focus keeps the offer clearer, the delivery model
                  sharper, and the value easier to understand.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  <span>Talk to us</span>
                  <BtnArrow />
                </Link>
              </div>
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
