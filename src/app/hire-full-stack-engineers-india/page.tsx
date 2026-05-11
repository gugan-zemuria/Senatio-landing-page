import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Hire Full-Stack Engineers in India | Senatio",
  description:
    "Hire full-stack engineers in India with Senatio. Build flexible engineering capacity with faster launch timelines, better team structure, and managed execution support.",
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

const helps = [
  "Define where full-stack roles fit best",
  "Hire full-stack engineers in India quickly",
  "Balance versatility with delivery quality",
  "Support onboarding and workflow alignment",
  "Integrate full-stack roles into a broader team design",
];

const bestFit = [
  "Early-stage product teams",
  "Lean startup engineering teams",
  "Rapid feature delivery",
  "Teams that need fewer frontend-backend handoffs",
  "Flexible engineering support across the stack",
];

export default function FullstackPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="fs-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Hire Full-Stack Engineers in India
                </p>
                <h2 className="section-title" id="fs-hero-h">
                  Hire full-stack engineers in India for flexible <em>product delivery.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps companies hire full-stack engineers in India when
                  they need flexible product execution across frontend and
                  backend work. We help clients build full-stack capacity with
                  better team design, faster hiring, and stronger delivery
                  support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="fs-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fs-why-h">
                  Why full-stack engineers are <em>valuable.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Full-stack engineers are especially useful when teams need
                versatility, speed, and fewer handoff delays across product
                surfaces. They can help startups move faster, help lean teams do
                more with less coordination, and help product teams maintain
                momentum across changing priorities.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="fs-helps-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fs-helps-h">
                  How Senatio <em>helps.</em>
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
              }}
            >
              {helps.map((item, i) => (
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
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="fs-fit-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fs-fit-h">
                  Best-fit <em>situations.</em>
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
              {bestFit.map((item, i) => (
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
                <span>Talk to us about hiring full-stack engineers in India</span>
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
