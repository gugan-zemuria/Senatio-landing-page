import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Workflow Automation | Senatio",
  description:
    "Improve engineering execution with workflow automation, reporting, visibility, and practical AI-enabled operations. Reduce friction and move faster.",
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

const improveItems: CardItem[] = [
  { num: "01", title: "Delivery reporting and visibility", desc: "Clear visibility into delivery progress, blockers, and team throughput." },
  { num: "02", title: "Status tracking and coordination", desc: "Tighter internal coordination across product, engineering, and ops." },
  { num: "03", title: "Repetitive manual operational tasks", desc: "Automation of repetitive manual steps that slow engineers down." },
  { num: "04", title: "QA and release process friction", desc: "Smoother QA and release workflows that reduce delays and errors." },
  { num: "05", title: "Workflow clarity", desc: "Clearer handoffs and ownership across the engineering org." },
  { num: "06", title: "Practical AI-enabled workflows", desc: "AI-enabled internal workflows where they create real efficiency." },
];

export default function WorkflowAutomationPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="lp5-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Engineering Workflow Automation
                </p>
                <h2 className="section-title" id="lp5-hero-h">
                  Improve engineering execution through workflow <em>automation.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Good engineers still struggle in weak systems. Senatio helps
                  companies improve engineering execution through workflow
                  automation, stronger visibility, better reporting, and
                  practical operational improvements around the team.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp5-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp5-why-h">
                  Why workflow automation <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Engineering teams lose time in places that are easy to
                underestimate. Manual updates, unclear handoffs, repetitive
                coordination, fragmented tooling, and weak visibility all slow
                delivery down. Over time, those small inefficiencies become a
                meaningful drag on execution.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                Improving workflows does not mean launching a broad
                transformation initiative. It means fixing the parts of the
                operating layer that slow the engineering team down.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp5-what-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp5-what-h">
                  What Senatio helps <em>improve.</em>
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
              {improveItems.map((item) => (
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp5-practice-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp5-practice-h">
                  What this looks like in <em>practice.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                This may include improving dashboards, reducing manual reporting
                overhead, tightening internal handoffs, automating repetitive
                workflow steps, or creating better visibility into delivery
                progress and blockers.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp5-fit-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp5-fit-h">
                  Why this works with the <em>Senatio model.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Workflow automation is not a separate disconnected service. It
                supports the core Senatio model by helping engineering teams run
                better once they are live. Better workflows help the team move
                faster, communicate more clearly, and stay easier to manage.
              </p>
            </div>
            <div style={{ marginTop: "24px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about your workflow bottlenecks</span>
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
