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
    "Hire backend engineers in India with Senatio. Build a stronger backend team with faster hiring, managed onboarding, better delivery structure, and long-term scaling support.",
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
  "Defining the right backend role profile",
  "Hiring backend engineers in India faster",
  "Matching backend hiring to product and platform needs",
  "Onboarding engineers into your workflows and tooling",
  "Supporting long-term team growth and continuity",
];

const useCases = [
  "API development",
  "Platform engineering",
  "Business logic and services",
  "Integrations and internal systems",
  "Scalable backend foundations for product growth",
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
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
              }}
            >
              {useCases.map((item, i) => (
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
