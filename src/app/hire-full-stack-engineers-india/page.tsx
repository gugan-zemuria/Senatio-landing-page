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
    "Hire full-stack engineers in India with Senatio. Flexible engineering capacity with faster launch timelines, better team structure, and managed execution support.",
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

interface CardItem {
  num: string;
  title: string;
  desc: string;
}

const helps: CardItem[] = [
  { num: "01", title: "Define where full-stack fits", desc: "Clarify where full-stack roles add the most value in your team." },
  { num: "02", title: "Hire full-stack engineers quickly", desc: "Fast full-stack hiring in India without compromising fit." },
  { num: "03", title: "Balance versatility and quality", desc: "Balance full-stack versatility with strong delivery quality." },
  { num: "04", title: "Onboarding and alignment", desc: "Engineers onboarded into workflows and aligned with your stack." },
  { num: "05", title: "Integrate into team design", desc: "Full-stack roles integrated into a broader, coherent team structure." },
];

const bestFit: CardItem[] = [
  { num: "01", title: "Early-stage product teams", desc: "Early-stage teams that need versatile engineers across the stack." },
  { num: "02", title: "Lean startup teams", desc: "Lean startup engineering teams that move fast with fewer people." },
  { num: "03", title: "Rapid feature delivery", desc: "Teams that need rapid feature delivery without handoff delays." },
  { num: "04", title: "Fewer handoffs", desc: "Teams that benefit from fewer frontend-backend coordination points." },
  { num: "05", title: "Flexible engineering support", desc: "Flexible engineering support across the full technology stack." },
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
              {helps.map((item) => (
                <article
                  key={item.title}
                  style={{
                    background: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                  data-reveal
                >
                  <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>
                    {item.num}
                  </span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--fg-2)", fontSize: "0.925rem", lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
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
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {bestFit.map((item) => (
                <article
                  key={item.title}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                  data-reveal
                >
                  <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>
                    {item.num}
                  </span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--fg-2)", fontSize: "0.925rem", lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
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
