import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Hire Backend Engineers in India | Senatio",
  description:
    "Hire backend engineers in India with Senatio. Faster hiring, managed onboarding, better delivery structure, and long-term scaling support.",
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
  { num: "01", title: "Defining the right role profile", desc: "Role definition aligned to your product, platform, and growth needs." },
  { num: "02", title: "Faster backend hiring", desc: "Hiring backend engineers in India with speed and quality." },
  { num: "03", title: "Matching hiring to needs", desc: "Backend hiring matched to product requirements and platform goals." },
  { num: "04", title: "Onboarding into workflows", desc: "Engineers onboarded into your tooling, workflows, and codebase." },
  { num: "05", title: "Long-term growth and continuity", desc: "Team stays strong and dependable as it grows over time." },
];

const useCases: CardItem[] = [
  { num: "01", title: "API development", desc: "Building and maintaining APIs that power your product." },
  { num: "02", title: "Platform engineering", desc: "Platform services and infrastructure that support engineering scale." },
  { num: "03", title: "Business logic and services", desc: "Core business logic and backend services for your application." },
  { num: "04", title: "Integrations and internal systems", desc: "Integrations with third-party services and internal tooling." },
  { num: "05", title: "Scalable foundations", desc: "Scalable backend foundations that support long-term product growth." },
];

export default function BackendPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="be-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Hire Backend Engineers in India
                </p>
                <h2 className="section-title" id="be-hero-h">
                  Hire backend engineers in India with more <em>structure and speed.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps global companies hire backend engineers in India
                  as part of a stronger, better-managed engineering team. The
                  goal is not just to fill backend roles, but to help clients
                  build dependable backend capability that supports real product
                  and platform growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="be-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="be-why-h">
                  Why backend hiring matters <em>so much.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Backend engineers shape the reliability, performance,
                integrations, and core logic of a product. Strong backend
                capability matters for APIs, platform services, internal systems,
                data flow, and application scale. That is why backend hiring
                decisions have an outsized impact on delivery quality over time.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="be-helps-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="be-helps-h">
                  What Senatio helps <em>with.</em>
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="be-use-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="be-use-h">
                  Common use <em>cases.</em>
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
              {useCases.map((item) => (
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
                <span>Talk to us about hiring backend engineers in India</span>
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
