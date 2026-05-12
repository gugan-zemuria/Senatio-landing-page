import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "B2B SaaS Engineering Capacity from India | Senatio",
  description:
    "How Senatio helped a B2B SaaS company add engineering capacity from India without absorbing hiring drag, compliance overhead, or continuity risk.",
};

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const normalOptions = [
  { label: "Keep hiring locally", desc: "Too slow, too expensive, and too dependent on a difficult talent market." },
  { label: "Build a team in India directly", desc: "Possible, but it would push legal setup, payroll complexity, compliance responsibility, continuity planning, and management overhead back onto leadership." },
  { label: "Use loose offshore staffing", desc: "Fast in appearance, weak in practice. Seat-filling does not solve launch quality, operating discipline, replacement risk, or the fragility that comes when the team has no real support structure around it." },
];

const whatLeadershipWasProtecting = [
  "Leadership time",
  "Roadmap momentum",
  "Operating clarity",
  "Commercial flexibility",
  "Continuity if people changed",
  "The ability to scale team size up or down without rebuilding the model every time priorities moved",
];

const whatChanged = [
  "The client gained access to engineering capacity faster than local hiring would likely have allowed",
  "The team launched as a managed capability rather than a collection of disconnected seats",
  "Leadership avoided taking on the full direct burden of local payroll, compliance, and continuity management",
  "The company reduced exposure to the fragility that often comes with self-built offshore teams",
  "The team became easier to scale up, reshape, or scale down as priorities evolved",
  "Added capacity felt commercially safer because it came with less hidden operating drag",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://senatio.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://senatio.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "B2B SaaS Engineering Capacity", item: "https://senatio.com/case-studies/b2b-saas-engineering-capacity" },
  ],
};

export default function B2bSaaSEngineeringCapacityPage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Case Study · 01
                </p>
                <h2 className="section-title" id="hero-h">
                  How a global B2B SaaS company expanded engineering capacity from India <em>without taking on the usual hiring, payroll, and compliance burden</em>
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
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", margin: 0 }}>
                The client did not need more recruiting activity. It needed more engineering output without adding a second operating system for leadership to carry. Local hiring was expensive, the roadmap was getting heavier, and building an India team directly would have pushed payroll, compliance, continuity, and management burden back onto the business. Senatio helped the company add engineering capacity from India in a way that was faster to launch, lighter to operate, and far easier to scale over time.
              </p>
              <div style={{ padding: "20px 24px", border: "1px solid var(--line)", background: "var(--bg-2)", borderRadius: "8px", alignSelf: "start" }}>
                <p className="mono" style={{ margin: "0 0 4px 0" }}>Client profile</p>
                <p style={{ margin: 0, fontSize: "1.05rem", color: "var(--fg)" }}>Global B2B SaaS company</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="problem-h">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gap: "clamp(24px, 4vw, 64px)",
                alignItems: "start",
              }}
            >
              <div data-reveal>
                <h2 className="section-title" id="problem-h">
                  The real business <em>problem.</em>
                </h2>
              </div>
              <div data-reveal data-delay="1">
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                  The company was under pressure from every direction that matters to a SaaS business at scale. Product expectations were rising. Platform work was expanding. Customer commitments were not slowing down. The existing team was carrying too much weight, and every slow hire made the roadmap more fragile.
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  But leadership was not treating this as a simple recruiting problem. It was asking a harder and more commercially important question: how do we add serious delivery capacity without adding the same amount of institutional drag behind it?
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  Hiring in existing markets was proving slow, expensive, and increasingly frustrating. Strong candidates were hard to close. Compensation expectations were high. Even when the company could justify the spend, it could not justify the delay. And the direct-build alternative in India brought a different class of burden altogether: local employment setup, payroll administration, statutory obligations, contracts, tax and compliance handling, notice-period realities, replacement risk, and the ongoing management effort required to make the team stable after launch.
                </p>
                <p style={{ color: "var(--fg)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  The company did not just need engineers. It needed to avoid becoming the operator of an entirely new employment and delivery system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="options-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="options-h">
                  Why the normal options were not <em>good enough.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
              {normalOptions.map((item) => (
                <article key={item.label} style={{ borderTop: "1px solid var(--accent)", paddingTop: "14px", background: "var(--bg)", padding: "24px", borderRadius: "8px" }} data-reveal>
                  <p className="mono" style={{ marginBottom: "8px", color: "var(--accent)" }}>
                    {item.label}
                  </p>
                  <p style={{ color: "var(--fg-2)", lineHeight: 1.55, margin: 0, fontSize: "0.95rem" }}>
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <p style={{ color: "var(--fg)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                The client was not looking for the cheapest answer. It was looking for the lowest-burden answer that still produced real output.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="protect-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="protect-h">
                  What leadership was actually trying to <em>protect.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {whatLeadershipWasProtecting.map((item, i) => (
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

        <section className="section" aria-labelledby="senatio-h">
          <div className="wrap">
            <div
              style={{
                display: "grid",
                gap: "clamp(24px, 4vw, 64px)",
                alignItems: "start",
              }}
            >
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="senatio-h">
                  What Senatio <em>did.</em>
                </h2>
              </div>
              <div data-reveal>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                  Senatio helped the client build a managed engineering capability from India, not a loose offshore team.
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  First, Senatio worked through the team design problem properly. The question was not &ldquo;how many people can we add?&rdquo; It was &ldquo;what structure creates leverage fastest without becoming fragile?&rdquo; That meant choosing the right role mix, the right order of hiring, and the right balance between speed and operating stability so the team would be useful in practice, not just impressive on paper.
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  Second, Senatio helped the client launch that capacity faster. But the real value was not speed alone. Senatio also carried the operating layer around the team so the client did not need to absorb every piece of employment and management infrastructure itself.
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  That point is where many expansion decisions quietly break. Once a company builds a foreign team directly, it is no longer only hiring people. It is taking responsibility for payroll execution, compliance exposure, local employment realities, continuity planning, replacement handling, and the work of keeping the team healthy as business needs change. Senatio removed a large part of that burden.
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  Third, the model gave the client optionality. The company could expand when roadmap pressure rose, reshape the team when priorities changed, and reduce exposure to the rigid long-term drag that often makes expansion feel heavier than the output is worth.
                </p>
              </div>
            </div>
          </div>
        </section>

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

        <section className="section" aria-labelledby="bos-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="bos-h">
                  Why Build, Operate, Scale mattered <em>here.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(24px, 4vw, 48px)" }} data-reveal>
              <div>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", margin: 0 }}>
                  This case is exactly why the model is attractive to serious buyers.
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  <strong>Build</strong> solves the speed and capacity problem.<br />
                  <strong>Operate</strong> solves the &ldquo;who carries the burden once the team is live?&rdquo; problem.<br />
                  <strong>Scale</strong> solves the flexibility problem by making it easier to grow or contract without rebuilding the structure from scratch.
                </p>
                <p style={{ color: "var(--fg)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                  That is what makes the offer commercially strong. The client was not just buying engineers. It was buying speed, lower burden, continuity, and optionality.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "28px" }}>
                <p className="mono" style={{ marginBottom: "14px", color: "var(--accent)" }}>
                  Why buyers trust Senatio
                </p>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", margin: 0 }}>
                  A serious buyer reading this should feel something important: these people understand the liabilities behind expansion, not just the headline opportunity. Payroll complexity. Compliance exposure. Continuity risk. Leadership distraction. The cost of getting locked into a team model that becomes hard to change later. Senatio addresses those worries directly. That is why the offer feels credible at operator level, not just attractive at marketing level.
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "28px" }}>
                <p className="mono" style={{ marginBottom: "14px", color: "var(--accent)" }}>
                  Bottom line
                </p>
                <p style={{ color: "var(--fg)", lineHeight: 1.65, fontSize: "1.1rem", margin: 0 }}>
                  The client did not just add engineers. It added engineering capacity without absorbing the usual hiring, payroll, compliance, continuity, and management burden that often makes expansion feel heavier than it is worth.
                </p>
              </div>

              <div>
                <Link href="/contact" className="btn btn-primary">
                  <span>Talk to us about building engineering capacity from India with less operating burden</span>
                  <BtnArrow />
                </Link>
              </div>
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
