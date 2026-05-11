import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Hire DevOps Engineers in India | Senatio",
  description:
    "Hire DevOps engineers in India with Senatio. Improve deployment reliability, infrastructure resilience, and engineering scale with managed hiring and onboarding support.",
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
  { num: "01", title: "Define the right DevOps role", desc: "Role definition based on your system complexity and infrastructure needs." },
  { num: "02", title: "Hire DevOps engineers faster", desc: "Faster DevOps hiring in India without compromising on quality." },
  { num: "03", title: "Onboarding into workflows", desc: "Engineers onboarded into infrastructure and release workflows." },
  { num: "04", title: "Improve alignment", desc: "Better alignment between DevOps and product engineering teams." },
  { num: "05", title: "Build dependable operations", desc: "Build more dependable operational capability that holds over time." },
];

const priorities: CardItem[] = [
  { num: "01", title: "Deployment workflows", desc: "Reliable deployment workflows that reduce release friction." },
  { num: "02", title: "Infrastructure automation", desc: "Infrastructure automation for consistent and repeatable environments." },
  { num: "03", title: "Observability and monitoring", desc: "Observability and monitoring for faster issue detection and resolution." },
  { num: "04", title: "Environment stability", desc: "Stable environments that engineering teams can depend on." },
  { num: "05", title: "Scalable operational systems", desc: "Operational systems that scale cleanly as the team grows." },
];

export default function DevopsPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="do-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Hire DevOps Engineers in India
                </p>
                <h2 className="section-title" id="do-hero-h">
                  Hire DevOps engineers in India for stronger infrastructure and <em>delivery reliability.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps companies hire DevOps engineers in India who can
                  improve infrastructure reliability, deployment workflows,
                  observability, and operational resilience. We help clients
                  build DevOps capability with stronger team design and better
                  long-term support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="do-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="do-why-h">
                  Why DevOps hiring <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                DevOps capability often becomes critical as product complexity
                grows. Weak deployment workflows, unstable environments, and
                poor observability can slow product teams down even when
                application engineers are strong. A capable DevOps layer helps
                teams ship more confidently and scale with fewer operational
                issues.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="do-helps-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="do-helps-h">
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="do-priorities-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="do-priorities-h">
                  Typical <em>priorities.</em>
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
              {priorities.map((item) => (
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
                <span>Talk to us about hiring DevOps engineers in India</span>
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
