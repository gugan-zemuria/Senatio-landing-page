import type { Metadata } from "next";
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

const s = {
  text: { color: "var(--fg-2)" as const, lineHeight: 1.65 as const, fontSize: "1.05rem" as const, margin: 0 as const },
  textSm: { color: "var(--fg-2)" as const, lineHeight: 1.55 as const, fontSize: "0.95rem" as const, margin: 0 as const },
  stack: { display: "flex" as const, flexDirection: "column" as const, gap: "16px" as const },
  max: { maxWidth: "640px" as const },
};

const buildItems = [
  { title: "Internal dashboards and reporting systems", desc: "Dashboards and reporting systems that give teams real visibility into operations and delivery." },
  { title: "Workflow tools for engineering and operations", desc: "Workflow tools that reduce manual coordination and handoff friction." },
  { title: "Lightweight software for repetitive processes", desc: "Lightweight software for internal processes that should not require constant human attention." },
  { title: "Coordination and handoff systems", desc: "Systems that make cross-team work clearer and more dependable." },
  { title: "Operational tooling that improves visibility and control", desc: "Tooling that improves visibility, control, and decision-making speed." },
  { title: "Practical AI-enabled internal systems where useful", desc: "AI-enabled internal systems where they create real efficiency and leverage." },
];

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

        {/* ── When this becomes valuable ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="when-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="when-h">
                  When this becomes <em>valuable.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                Many companies do not only need more engineering capacity. They need better internal systems. Reporting stays manual. Workflows are fragmented. Important steps still depend on spreadsheets, follow-up, and human glue. That is where internal tooling becomes a leverage tool, not just a software project.
              </p>
            </div>
          </div>
        </section>

        {/* ── What Senatio can build ── */}
        <section className="section" aria-labelledby="build-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="build-h">
                  What Senatio can <em>build.</em>
                </h2>
              </div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}>
              {buildItems.map((item, i) => (
                <article key={item.title} style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }} data-reveal>
                  <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>{item.title}</h3>
                  <p style={s.textSm}>{item.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <button
                className="btn btn-primary"
                data-cal-namespace="30min"
                data-cal-link="senatio/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                <span>Talk to us about internal tools and custom software</span>
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
