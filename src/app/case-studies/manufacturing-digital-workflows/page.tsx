import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Case Study: Replacing Physical Process Handling with Digital Workflows and Automation | Senatio",
  description:
    "See how Senatio helped a manufacturing giant replace physical, manual operating processes with digital workflows, practical automation, stronger visibility, and better operating control.",
};

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const s = {
  text: { color: "var(--fg-2)" as const, lineHeight: 1.65 as const, fontSize: "1.05rem" as const, margin: 0 as const },
  max: { maxWidth: "640px" as const },
};

const struggles = [
  "Important process steps were still physical or manually driven",
  "Approvals and handoffs required repeated human follow-up",
  "Visibility into what had moved, what was pending, and where delay was forming was too weak",
  "Teams spent too much time checking status and correcting process drift",
  "Output depended too much on experienced people knowing how to push the process through",
  "The business risked scaling volume without improving operating control",
];

const whatChanged = [
  "Physical and manual process handling dropped materially",
  "Workflow movement became more digital, visible, and trackable",
  "Approvals and status movement depended less on repeated human chasing",
  "Teams spent less time on process administration and more time on productive work",
  "Managers gained clearer visibility into where work was moving and where it was getting stuck",
  "The business was able to handle more work with better consistency and stronger control",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://senatio.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://senatio.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "Manufacturing Digital Workflows", item: "https://senatio.com/case-studies/manufacturing-digital-workflows" },
  ],
};

export default function ManufacturingDigitalWorkflowsPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Grain />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="section" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Case Study · 03
                </p>
                <h2 className="section-title" id="hero-h">
                  How a manufacturing giant replaced physical process handling with digital workflows <em>and practical automation</em>
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "clamp(24px, 4vw, 48px)",
                alignItems: "start",
              }}
              data-reveal
              data-delay="1"
            >
              <p style={s.text}>
                The client did not mainly have a software problem. It had a workflow reality problem. Important parts of the business were still being carried by physical process movement, spreadsheet logic, manual approvals, repeated follow-up, and people acting as the glue between broken steps. Senatio helped redesign the workflow, digitize the process, automate the repeatable parts, and turn effort-heavy operational movement into a more visible and manageable system.
              </p>
              <div style={{ padding: "20px 24px", border: "1px solid var(--line)", background: "var(--bg-2)", borderRadius: "8px", alignSelf: "start" }}>
                <p className="mono" style={{ margin: "0 0 4px 0" }}>Client profile</p>
                <p style={{ margin: 0, fontSize: "1.05rem", color: "var(--fg)" }}>Large manufacturing company</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── The real business problem ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="problem-h">
          <div className="wrap">
            <div style={{ display: "grid", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              <div data-reveal>
                <h2 className="section-title" id="problem-h">
                  The real business <em>problem.</em>
                </h2>
              </div>
              <div data-reveal data-delay="1">
                <p style={s.text}>
                  The company had scale, demand, and operational depth. But several critical workflows were still moving in a way that belonged to an earlier stage of the business.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  Approvals were spread across physical documents, spreadsheets, calls, emails, and manual updates. Status often lived inside people rather than systems. Teams could move work forward, but only by repeatedly checking, chasing, confirming, and compensating. Managers were often acting like human workflow engines, pushing information from one step to the next just to keep the operation moving.
                </p>
                <p style={{ ...s.text, marginTop: "16px", color: "var(--fg)" }}>
                  That kind of burden is dangerous in a large business because it hides in plain sight. The company looks operational. Work is moving. But too much of the movement is powered by effort instead of design.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What they were struggling with ── */}
        <section className="section" aria-labelledby="struggles-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="struggles-h">
                  What they were struggling <em>with.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {struggles.map((item, i) => (
                <article key={item} style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: "12px", padding: "24px" }} data-reveal>
                  <p className="mono" style={{ marginBottom: "8px", color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{ color: "var(--fg)", lineHeight: 1.5, margin: 0, fontSize: "0.95rem" }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── What was actually at stake ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="stake-h">
          <div className="wrap">
            <div style={{ display: "grid", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="stake-h">
                  What was actually at <em>stake.</em>
                </h2>
              </div>
              <div data-reveal>
                <p style={s.text}>
                  This was not just an efficiency issue. It was an operational leverage issue.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  If those workflows stayed physical and manual, the company would keep needing more effort to handle more work. Throughput would improve slowly. Process inconsistency would remain high. Management visibility would stay weak. And every attempt to grow output would recreate the same friction at a larger scale.
                </p>
                <p style={{ ...s.text, marginTop: "16px", color: "var(--fg)" }}>
                  That is the trap many large businesses fall into. They scale activity before they scale the system that activity depends on.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What Senatio did ── */}
        <section className="section" aria-labelledby="senatio-h">
          <div className="wrap">
            <div style={{ display: "grid", gap: "clamp(24px, 4vw, 64px)", alignItems: "start" }}>
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="senatio-h">
                  What Senatio <em>did.</em>
                </h2>
              </div>
              <div data-reveal>
                <p style={s.text}>
                  Senatio started by treating the problem as a workflow redesign problem, not a tooling purchase problem.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  First, the existing process had to be mapped honestly. That meant understanding what was still physical, where manual interventions kept happening, which approvals created repeated friction, where information disappeared from view, and where the business was paying hidden execution tax every day without always noticing it.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  Second, Senatio helped redesign the flow so the work could move digitally instead of depending on scattered physical artifacts and repeated manual follow-up. The goal was to make the key states in the workflow visible, reduce ambiguity, and remove the need for people to constantly ask where something stood.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  Third, Senatio introduced practical automation and internal system logic where it created real leverage. The point was not to automate for optics. The point was to remove the repetitive human handling that was slowing the business down and making control weaker than it should have been.
                </p>
                <p style={{ ...s.text, marginTop: "16px", color: "var(--fg)" }}>
                  What changed was not only the software layer. The operating behavior of the workflow changed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What changed ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="changed-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="changed-h">
                  What <em>changed.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {whatChanged.map((item, i) => (
                <article key={item} style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: "12px", padding: "24px" }} data-reveal>
                  <p className="mono" style={{ marginBottom: "8px", color: "var(--accent)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p style={{ color: "var(--fg)", lineHeight: 1.5, margin: 0, fontSize: "0.95rem" }}>
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why it worked ── */}
        <section className="section" aria-labelledby="why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-h">
                  Why it <em>worked.</em>
                </h2>
              </div>
            </div>
            <div style={s.max} data-reveal>
              <p style={s.text}>
                The work succeeded because Senatio did not diagnose the issue as &ldquo;the company needs software.&rdquo; It diagnosed it as &ldquo;the company is still relying on people to carry a system that should be carried by a workflow.&rdquo; That is a much more useful level of thinking. Once the weak points were made visible and the workflow was redesigned around digital movement and practical automation, the business gained leverage that additional effort alone would never have created.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why this makes buyers trust Senatio ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="trust-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="trust-h">
                  Why this makes buyers trust <em>Senatio.</em>
                </h2>
              </div>
            </div>
            <div style={s.max} data-reveal>
              <p style={s.text}>
                A buyer reading this should feel that Senatio understands messy operational reality. Paper-driven handoffs. Spreadsheets pretending to be systems. Approvals living across calls, emails, and people&rsquo;s memory. Managers becoming human middleware because the workflow is not doing its job. That credibility matters. It tells the buyer these are people who can walk into operational complexity, understand it quickly, and improve it without hiding behind vague transformation language.
              </p>
            </div>
          </div>
        </section>

        {/* ── Bottom line ── */}
        <section className="section" aria-labelledby="bottom-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="bottom-h">
                  Bottom <em>line.</em>
                </h2>
              </div>
            </div>
            <div style={s.max} data-reveal>
              <p style={{ ...s.text, color: "var(--fg)", fontSize: "1.1rem" }}>
                The client did not just digitize a process. It reduced dependence on physical handling, manual follow-up, and human workflow glue. The result was stronger control, better throughput, clearer visibility, and a business that could handle more work without scaling friction at the same rate.
              </p>
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about digitizing and automating broken internal workflows</span>
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
