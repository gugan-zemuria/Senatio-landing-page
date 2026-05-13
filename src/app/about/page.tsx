import type { Metadata } from "next";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "About Senatio | Engineering Teams from India",
  description:
    "Learn about Senatio\u2019s operator-led approach to helping global companies build, operate, and scale engineering teams from India with stronger execution and lower operating drag.",
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
                  About <em>Senatio.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio is an operator-led partner for global companies building engineering capability from India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why we exist / What we focus on / How we think ── */}
        <section className="section about-section" style={{ background: "var(--bg-2)" }} aria-labelledby="about-beliefs-h">
          <div className="wrap">
            <div className="about-grid" data-reveal>
              <div>
                <p className="mono" style={{ marginBottom: "12px", color: "var(--accent)" }}>
                  Why we exist
                </p>
                <p>
                  Building from India is easy to talk about and much harder to execute well. Hiring is only one part of the challenge. The real challenge is launching the team properly, creating the right operating structure, and scaling without taking on unnecessary drag.
                </p>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: "12px", color: "var(--accent)" }}>
                  What we focus on
                </p>
                <p>
                  Senatio focuses on launch speed, execution discipline, continuity, and scalable engineering capability. We help clients move from hiring intent to a team and operating model that actually works.
                </p>
              </div>
              <div>
                <p className="mono" style={{ marginBottom: "12px", color: "var(--accent)" }}>
                  How we think
                </p>
                <p>
                  The strongest teams are not built through random hiring bursts or loose seat-filling. They are built through clearer team design, better operating rhythm, and practical execution support around the work.
                </p>
              </div>
            </div>

            <div style={{ marginTop: "40px" }} data-reveal>
              <button
                className="btn btn-primary"
                data-cal-namespace="30min"
                data-cal-link="senatio/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                <span>Talk to us</span>
                <BtnArrow />
              </button>
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
