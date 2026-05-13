import type { Metadata } from "next";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Workflow Improvement and Automation | Senatio",
  description:
    "Senatio helps companies improve execution around engineering teams through workflow improvement, delivery visibility, practical automation, and internal operating support.",
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

const s = {
  text: { color: "var(--fg-2)" as const, lineHeight: 1.65 as const, fontSize: "1.05rem" as const, margin: 0 as const },
  textSm: { color: "var(--fg-2)" as const, lineHeight: 1.55 as const, fontSize: "0.95rem" as const, margin: 0 as const },
  stack: { display: "flex" as const, flexDirection: "column" as const, gap: "16px" as const },
  max: { maxWidth: "640px" as const },
};

const bottlenecks = [
  "Weak delivery visibility",
  "Poor coordination between product, engineering, and operations",
  "Manual reporting overhead",
  "Repeated internal status chasing",
  "Release and QA friction",
  "Fragmented internal tooling",
  "Workflow bottlenecks that slow output",
];

const howWeHelp = [
  "Workflow mapping around delivery",
  "Reporting and dashboard improvement",
  "Internal coordination improvements",
  "Automation of repetitive operational tasks",
  "Support for better internal systems where needed",
  "AI-enabled workflow improvement where it creates real leverage",
];

export default function ExecutionImprovementPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="section" aria-labelledby="ei-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Execution Improvement
                </p>
                <h2 className="section-title" id="ei-hero-h">
                  Improve execution around your <em>engineering team.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Good engineers still underperform inside weak systems. Senatio helps improve execution around the engineering team through workflow redesign, better visibility, practical automation, and cleaner internal operating logic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What execution improvement really means ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="what-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="what-h">
                  What execution improvement really <em>means.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                Execution improvement is not generic transformation language. It is practical work that helps a team and the business around it run better. That can mean reducing repetitive coordination, improving reporting, tightening release flow, clarifying ownership, or fixing the operational weak points that slow delivery down.
              </p>
            </div>
          </div>
        </section>

        {/* ── Common bottlenecks ── */}
        <section className="section" aria-labelledby="bottlenecks-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="bottlenecks-h">
                  Common bottlenecks we help <em>address.</em>
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
              {bottlenecks.map((item, i) => (
                <article
                  key={item}
                  style={{
                    borderTop: "1px solid var(--line)",
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

        {/* ── How Senatio helps ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="how-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="how-h">
                  How Senatio <em>helps.</em>
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
              {howWeHelp.map((item, i) => (
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

        {/* ── Why this matters ── */}
        <section className="section" aria-labelledby="why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-h">
                  Why this <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                Execution problems are expensive because they hide inside otherwise capable teams. Businesses often think they need more people when the deeper issue is coordination, visibility, or process drag. Senatio helps remove that drag so the team becomes more commercially useful.
              </p>
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <button
                className="btn btn-primary"
                data-cal-namespace="30min"
                data-cal-link="senatio/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                <span>Talk to us about your execution bottlenecks</span>
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
