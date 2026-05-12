import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Managed Engineering Team Pricing from India | Senatio",
  description:
    "Understand Senatio\u2019s pricing model for managed engineering teams from India, including launch, monthly managed pricing, workflow improvement, internal tools, and separately scoped execution work.",
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
  textSm: { color: "var(--fg-2)" as const, lineHeight: 1.6 as const, fontSize: "0.95rem" as const, margin: 0 as const },
  stack: { display: "flex" as const, flexDirection: "column" as const, gap: "16px" as const },
  max: { maxWidth: "680px" as const },
  mono: { color: "var(--accent)" as const, marginBottom: "12px" as const },
};

export default function PricingPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="section" aria-labelledby="pricing-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Pricing
                </p>
                <h2 className="section-title" id="pricing-hero-h">
                  How pricing <em>works.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio's pricing model is built around managed engineering capability, not raw payroll pass-through. Clients are paying for the ability to launch, operate, support, and scale a dependable engineering team from India, with practical execution support and internal solution work where needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What clients are actually buying ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="buying-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="buying-h">
                  What clients are actually <em>buying.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                When clients work with Senatio, they are not simply buying engineers at a monthly rate. They are buying a lower-burden way to add real engineering capacity and improve execution without having to build the full operating layer alone.
              </p>
              <p style={s.text}>
                That means the pricing model reflects more than compensation cost. It reflects team design, launch support, payroll and compliance support, continuity planning, operating structure, delivery visibility, and the practical support required to keep the team useful over time.
              </p>
            </div>
          </div>
        </section>

        {/* ── The pricing model in plain English ── */}
        <section className="section" aria-labelledby="plain-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="plain-h">
                  The pricing model in plain <em>English.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                The commercial model has three layers. That structure matters because clients should understand exactly what gets paid once, what gets paid monthly, and what gets scoped separately.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                marginTop: "32px",
              }}
            >
              <article
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}
                data-reveal
              >
                <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>1.</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                  One-time setup fee
                </h3>
                <p style={s.textSm}>
                  This covers the work required to launch the team properly. That includes team design, role planning, sourcing setup, hiring support, onboarding preparation, and the initial operating setup around the team. This is not invisible overhead. It is the work that makes the launch cleaner, faster, and less fragile.
                </p>
              </article>
              <article
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}
                data-reveal
                data-delay="1"
              >
                <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>2.</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                  Monthly managed team pricing
                </h3>
                <p style={s.textSm}>
                  Once the team is live, Senatio charges monthly managed pricing for the team and the operating layer around it. This is the core commercial model. It covers the live engineering capacity and the support structure that makes that capacity usable in practice.
                </p>
              </article>
              <article
                style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "12px" }}
                data-reveal
                data-delay="2"
              >
                <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>3.</span>
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                  Scoped internal solution work where needed
                </h3>
                <p style={s.textSm}>
                  If the client needs workflow automation, internal tools, dashboards, custom software, or deeper execution-improvement work beyond normal team operation, that can be scoped separately. Some lighter work may sit inside a broader engagement. More involved solution work should be treated as its own implementation scope.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ── What is included in the one-time setup fee ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="setup-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="setup-h">
                  What is included in the one-time <em>setup fee.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>Initial discovery and team design</li>
                <li>Role planning and hiring sequence</li>
                <li>Candidate sourcing setup</li>
                <li>Hiring support and selection coordination</li>
                <li>Onboarding preparation</li>
                <li>Initial operating structure for launch</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── What is included in monthly managed team pricing ── */}
        <section className="section" aria-labelledby="monthly-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="monthly-h">
                  What is included in monthly managed team <em>pricing.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                This is the part buyers need to understand clearly. The monthly pricing is not just paying for seats. It is paying for a managed engineering capability and the support structure around it.
              </p>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>Live engineering team capacity</li>
                <li>Ongoing hiring support as the team evolves</li>
                <li>Payroll administration support</li>
                <li>Compliance support around the team structure</li>
                <li>Continuity and replacement support</li>
                <li>Reporting and visibility support</li>
                <li>Operating rhythm around the team</li>
                <li>Delivery structure and coordination support where relevant</li>
                <li>Scale-up and scale-down flexibility</li>
                <li>General workflow improvement around the team where relevant</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Why that monthly model matters ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="why-monthly-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-monthly-h">
                  Why that monthly model <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                A client building this model alone would usually need to carry more of the hidden burden directly: payroll handling, compliance exposure, continuity planning, replacement effort, operating setup, and the management overhead required to keep the team stable once it is live.
              </p>
              <p style={s.text}>
                Senatio reduces that burden. That is a meaningful part of the commercial value. The client is not only paying for output. The client is paying to avoid a large amount of operational drag behind that output.
              </p>
            </div>
          </div>
        </section>

        {/* ── What is not automatically included ── */}
        <section className="section" aria-labelledby="not-included-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="not-included-h">
                  What is not automatically <em>included.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                To keep the pricing transparent, the page should also be clear about what falls outside normal monthly managed team pricing.
              </p>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>Larger custom internal software builds</li>
                <li>Deeper workflow automation projects</li>
                <li>Dedicated dashboards or internal tools built from scratch</li>
                <li>Broader implementation work beyond normal team operation</li>
                <li>Heavier standalone execution-improvement projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── When additional scoped work makes sense ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="scoped-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="scoped-h">
                  When additional scoped work makes <em>sense.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                Sometimes a client needs more than a team. It may also need workflow redesign, internal tooling, process digitization, or custom software tied to execution improvement. In those cases, separate scoping is the cleaner and more transparent approach.
              </p>
              <p style={s.text}>
                This is not a hidden upsell. It is simply a different kind of work. Managed team pricing covers the team and the operating layer around it. Deeper internal solution work should be scoped according to the problem, complexity, and level of implementation required.
              </p>
            </div>
          </div>
        </section>

        {/* ── What shapes pricing ── */}
        <section className="section" aria-labelledby="shapes-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="shapes-h">
                  What shapes <em>pricing.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>Role mix</li>
                <li>Seniority mix</li>
                <li>Team size</li>
                <li>Level of oversight required</li>
                <li>Complexity of the operating model</li>
                <li>Need for execution improvement or internal solution work</li>
                <li>How much flexibility the engagement needs around growth or reshaping</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Why we do not publish a hard public price ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="noprice-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="noprice-h">
                  Why we do not publish a hard public <em>price.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                The better public position for now is not to publish an exact starting number. A hard public number can anchor the market too early, flatten the value of the model, and make a managed capability offer look more commoditized than it should.
              </p>
              <p style={s.text}>
                The real commercial variable is not just headcount. It is team shape, operating complexity, support level, and whether the engagement also includes execution-improvement work or internal systems support.
              </p>
            </div>
            <div
              style={{
                marginTop: "28px",
                maxWidth: "640px",
                borderTop: "1px solid var(--line)",
                paddingTop: "28px",
              }}
              data-reveal
            >
              <p className="mono" style={{ color: "var(--accent)", marginBottom: "14px" }}>
                Recommended public position
              </p>
              <p style={s.text}>
                Most engagements begin with a 2-engineer team or equivalent managed scope. Final pricing depends on team structure, seniority mix, operating complexity, and the level of execution or internal solution support required.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why buyers still find this transparent ── */}
        <section className="section" aria-labelledby="transparent-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="transparent-h">
                  Why buyers still find this <em>transparent.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                Transparency does not only mean publishing a number. It means making the commercial structure easy to understand.
              </p>
              <p style={s.text}>
                A strong pricing page should let the buyer walk away knowing:
              </p>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>What gets charged once</li>
                <li>What gets charged monthly</li>
                <li>What is included in monthly pricing</li>
                <li>What is not automatically included</li>
                <li>When separate scoping applies</li>
                <li>Why the model costs what it costs</li>
              </ul>
            </div>
            <div style={{ maxWidth: "640px", marginTop: "16px" }} data-reveal>
              <p style={s.text}>
                That level of clarity builds more trust than a shallow public rate card ever would.
              </p>
            </div>
          </div>
        </section>

        {/* ── Why this model is commercially stronger ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="stronger-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="stronger-h">
                  Why this model is commercially <em>stronger.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                The real comparison is not raw payroll cost. The real comparison is the total burden of expansion.
              </p>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>How much delay comes from slow hiring?</li>
                <li>How much management time gets pulled into launch and team maintenance?</li>
                <li>How much risk sits in payroll, compliance, continuity, and replacement?</li>
                <li>How hard is it to scale up or down later?</li>
                <li>How much drag appears if the business has to build the entire operating layer alone?</li>
              </ul>
              <p style={s.text}>
                Senatio reduces that burden while still giving the client the capacity it actually needs. That is why the model is worth more than a cheaper but more fragile alternative.
              </p>
            </div>
          </div>
        </section>

        {/* ── What the buyer should feel after reading this page ── */}
        <section className="section" aria-labelledby="buyer-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="buyer-h">
                  What the buyer should feel after reading this <em>page.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "680px" }} data-reveal>
              <p style={s.text}>
                A strong buyer should come away thinking:
              </p>
              <ul style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", display: "flex", flexDirection: "column", gap: "10px", paddingLeft: "20px" }}>
                <li>I understand how this is structured</li>
                <li>I understand what I am paying for</li>
                <li>I understand what sits outside the core monthly scope</li>
                <li>I understand why this is better than trying to build it alone</li>
                <li>I understand why they are not positioning this like a body-shop rate card</li>
              </ul>
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Discuss team design and pricing</span>
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
