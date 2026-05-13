import type { Metadata } from "next";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Hire AI Engineers in India | Senatio",
  description:
    "Hire AI engineers in India with Senatio. Build applied AI capability for product features, internal tooling, workflow automation, and scalable execution.",
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
  { num: "01", title: "Clarify the AI role", desc: "Define what kind of AI capability you actually need before hiring." },
  { num: "02", title: "Hire with stronger role fit", desc: "Hire AI engineers in India with clearer role definition and fit." },
  { num: "03", title: "Align AI to priorities", desc: "AI work aligned to your product or workflow priorities." },
  { num: "04", title: "Onboarding into systems", desc: "Engineers onboarded into your technical and operational systems." },
  { num: "05", title: "Integrate into delivery", desc: "AI engineers integrated into a practical, structured delivery model." },
];

const whereHelp: CardItem[] = [
  { num: "01", title: "Applied AI product features", desc: "AI features that improve product capability and user experience." },
  { num: "02", title: "Internal AI-enabled tooling", desc: "Internal tools that use AI to improve team efficiency." },
  { num: "03", title: "Workflow automation", desc: "AI-powered workflow automation that reduces manual effort." },
  { num: "04", title: "Model operations", desc: "Operations and support systems for AI models in production." },
  { num: "05", title: "AI-assisted execution", desc: "AI-assisted execution improvement across the engineering org." },
];

export default function AiPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="ai-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Hire AI Engineers in India
                </p>
                <h2 className="section-title" id="ai-hero-h">
                  Hire AI engineers in India for practical product and <em>workflow execution.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps companies hire AI engineers in India when they
                  need applied AI capability tied to real execution. That may
                  include product features, internal tools, workflow support,
                  model operations, or AI-enabled systems that improve how work
                  gets done.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="ai-clarity-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="ai-clarity-h">
                  Why AI hiring needs more <em>clarity.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                AI roles are often defined too vaguely. Some teams need applied
                AI product engineering. Others need model operations, internal
                tooling, workflow automation, or support for AI-enabled features.
                Senatio helps clients define what kind of AI capability they
                actually need before hiring starts.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="ai-helps-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="ai-helps-h">
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="ai-where-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="ai-where-h">
                  Where AI engineers can <em>help.</em>
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
              {whereHelp.map((item) => (
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
              <button
                className="btn btn-primary"
                data-cal-namespace="30min"
                data-cal-link="senatio/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                <span>Talk to us about hiring AI engineers in India</span>
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
