import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Hire Frontend Engineers in India | Senatio",
  description:
    "Hire frontend engineers in India with Senatio. Build high-quality frontend capacity with faster hiring, managed onboarding, and stronger execution support.",
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
  { num: "01", title: "Define the right frontend role", desc: "Role definition aligned to your product stage and execution needs." },
  { num: "02", title: "Hire with speed and fit", desc: "Hire frontend engineers in India with the right balance of speed and fit." },
  { num: "03", title: "Onboarding into workflows", desc: "Engineers onboarded into product workflows and design systems." },
  { num: "04", title: "Improve coordination", desc: "Better coordination between frontend and the broader engineering team." },
  { num: "05", title: "Scalable frontend team", desc: "Build a frontend team that can scale cleanly over time." },
];

const whereHelps: CardItem[] = [
  { num: "01", title: "Product interfaces", desc: "High-quality product interfaces that improve user experience." },
  { num: "02", title: "Customer-facing applications", desc: "Customer-facing applications built for speed and reliability." },
  { num: "03", title: "Frontend modernization", desc: "Modernizing legacy frontend codebases with cleaner architecture." },
  { num: "04", title: "Faster feature delivery", desc: "Faster feature delivery through strong frontend execution." },
  { num: "05", title: "Improved coordination", desc: "Improved coordination with backend and product teams." },
];

export default function FrontendPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="fe-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Hire Frontend Engineers in India
                </p>
                <h2 className="section-title" id="fe-hero-h">
                  Hire frontend engineers in India for stronger <em>product execution.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps companies hire frontend engineers in India who
                  can support product quality, speed of execution, and
                  user-facing delivery. We help clients build frontend capability
                  with better structure, clearer onboarding, and stronger
                  long-term team design.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="fe-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fe-why-h">
                  Why frontend hiring is not just about <em>UI work.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Frontend engineers do more than build screens. They shape user
                experience quality, interaction speed, implementation
                reliability, and the delivery pace of product teams. A strong
                frontend layer improves customer experience and reduces friction
                between design, product, and engineering.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="fe-helps-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fe-helps-h">
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="fe-where-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fe-where-h">
                  Where this helps <em>most.</em>
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
              {whereHelps.map((item) => (
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
                <span>Talk to us about hiring frontend engineers in India</span>
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
