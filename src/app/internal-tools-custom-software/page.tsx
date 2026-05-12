import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Internal Tools and Custom Software for Execution Improvement | Senatio",
  description:
    "Senatio helps companies build internal tools, dashboards, workflow systems, and practical custom software that improve execution, visibility, and operating speed.",
};

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function InternalToolsPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="it-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>Internal Tools and Custom Software</p>
                <h2 className="section-title" id="it-hero-h">
                  Build internal tools and custom software that remove <em>execution drag.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Some execution problems cannot be solved by hiring alone. Senatio helps companies build practical internal tools, dashboards, workflow systems, and custom software that reduce friction and improve how the business runs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="it-value-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="it-value-h">
                  When this becomes <em>valuable.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Many companies do not only need more engineering capacity. They need better internal systems. Reporting stays manual. Workflows are fragmented. Important steps still depend on spreadsheets, follow-up, and human glue. That is where internal tooling becomes a leverage tool, not just a software project.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="it-build-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="it-build-h">
                  What Senatio can <em>build.</em>
                </h2>
              </div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}>
              {[
                { num: "01", title: "Internal dashboards", desc: "Dashboards and reporting systems that give teams real visibility into operations and delivery." },
                { num: "02", title: "Workflow tools", desc: "Workflow tools for engineering and operations that reduce manual coordination and handoff friction." },
                { num: "03", title: "Lightweight software", desc: "Lightweight software for repetitive internal processes that should not require constant human attention." },
                { num: "04", title: "Coordination systems", desc: "Coordination and handoff systems that make cross-team work clearer and more dependable." },
                { num: "05", title: "Operational tooling", desc: "Operational tooling that improves visibility, control, and decision-making speed." },
                { num: "06", title: "AI-enabled systems", desc: "Practical AI-enabled internal systems where they create real efficiency and leverage." },
              ].map((item) => (
                <article key={item.title} style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }} data-reveal>
                  <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{item.num}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>{item.title}</h3>
                  <p style={{ color: "var(--fg-2)", fontSize: "0.925rem", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about internal tools and custom software</span>
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
