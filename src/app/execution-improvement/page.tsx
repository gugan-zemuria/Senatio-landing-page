import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Workflow Improvement and Automation | Senatio",
  description:
    "Senatio helps companies improve execution around engineering teams through workflow improvement, delivery visibility, practical automation, and AI-enabled internal operations.",
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

const bottlenecks = [
  "Unclear ownership across engineering workstreams",
  "Weak delivery visibility for founders, leaders, or operators",
  "Manual reporting that wastes time every week",
  "Poor coordination between product, engineering, and operations",
  "Repetitive internal tasks that slow execution",
  "Release or QA processes that create avoidable drag",
  "Fragmented internal tooling that reduces clarity",
  "Slow feedback loops that block delivery momentum",
];

const howWeHelp = [
  "Workflow mapping around delivery",
  "Reporting and dashboard improvement",
  "Internal coordination improvements",
  "Automation of repetitive operational tasks",
  "Internal tooling support where relevant",
  "AI-enabled workflow improvement where it creates practical value",
];

const useCases = [
  {
    title: "Engineering workflow automation",
    desc: "Reduce manual status chasing, repeated updates, and fragmented coordination across the team.",
  },
  {
    title: "QA and release support",
    desc: "Improve handoffs, release discipline, testing visibility, and process clarity around shipping.",
  },
  {
    title: "Internal dashboards and reporting",
    desc: "Give founders, operators, and team leads a clearer view into progress, blockers, and execution health.",
  },
  {
    title: "Support workflow tooling",
    desc: "Reduce repetitive internal back-and-forth where support or operations processes slow delivery down.",
  },
  {
    title: "AI-assisted internal operations",
    desc: "Use lightweight AI-enabled workflows where they remove friction without adding unnecessary complexity.",
  },
];

const whatsNot = [
  "Not generic AI consulting",
  "Not broad business transformation across every function",
  "Not disconnected automation experiments",
  "Not a separate strategy layer with no operational follow-through",
];

export default function ExecutionImprovementPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
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
                  Building the right team is only part of the job. Delivery also
                  depends on how work moves, how information is shared, and how
                  much manual friction slows the team down. Senatio helps improve
                  execution around the engineering team through better workflows,
                  practical automation, and stronger visibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="what-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="what-h">
                  What execution improvement <em>means.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Execution improvement is not vague transformation language and it
                is not broad consulting theatre. It is practical work that helps
                an engineering team run better day to day. That may mean reducing
                repetitive coordination, improving reporting, tightening release
                processes, clarifying ownership, or introducing internal tooling
                that removes avoidable drag.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                For many companies, the team itself is not the only problem. The
                workflows around the team can be just as limiting. Good engineers
                still struggle when execution is slowed by unclear handoffs, poor
                visibility, manual updates, or weak operational systems.
              </p>
            </div>
          </div>
        </section>

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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="how-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="how-h">
                  How Senatio <em>helps.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  We look at the workflows around the engineering team and
                  identify where better structure or light automation can improve
                  speed, quality, and visibility. The goal is not to redesign the
                  entire company. The goal is to help the team and the surrounding
                  execution layer work better.
                </p>
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

        <section className="section" aria-labelledby="usecases-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="usecases-h">
                  Examples of execution <em>improvement.</em>
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {useCases.map((item) => (
                <article
                  key={item.title}
                  style={{
                    borderTop: "1px solid var(--accent)",
                    paddingTop: "14px",
                    background: "var(--bg)",
                    padding: "24px",
                    borderRadius: "8px",
                  }}
                  data-reveal
                >
                  <p className="mono" style={{ marginBottom: "8px" }}>
                    Use case
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.1rem",
                      margin: "0 0 8px",
                      fontWeight: 380,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--fg-2)", lineHeight: 1.55, margin: 0, fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="why-matters-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-matters-h">
                  Why this <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Execution problems are expensive because they often hide behind
                otherwise capable teams. A client may believe the issue is hiring
                speed or staffing depth, when the deeper issue is coordination,
                visibility, or process drag. By improving execution around the
                engineering team, Senatio helps clients get more value out of the
                team they are already building.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="fit-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="fit-h" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.6rem)", maxWidth: "100%" }}>
                  Where this fits in the <em>Senatio model.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                This work supports the Build, Operate, Scale model. It does not
                replace it. Senatio is still fundamentally about helping clients
                build and run strong engineering teams from India. Execution
                improvement is the layer that helps those teams perform better
                once they are live.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="not-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="not-h">
                  What this is <em>not.</em>
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
              {whatsNot.map((item, i) => (
                <article
                  key={item}
                  style={{
                    borderTop: "1px solid var(--accent)",
                    paddingTop: "14px",
                  }}
                  data-reveal
                >
                  <p style={{ color: "var(--fg)", lineHeight: 1.5, margin: 0, fontSize: "0.95rem" }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about your execution bottlenecks</span>
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
