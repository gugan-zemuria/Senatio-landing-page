import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Case Study: Making Engineering Scale Feel Controlled Instead of Chaotic | Senatio",
  description:
    "See how Senatio helped a growth-stage product company improve delivery visibility, reduce management drag, and make engineering scale feel more controlled and commercially usable.",
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
  "Delivery visibility was not strong enough for confident planning",
  "Reporting quality varied too much across people and workstreams",
  "Leadership spent too much time reconstructing the real picture manually",
  "Scaling the team was increasing coordination cost faster than expected",
  "The business was paying for engineering effort without getting enough control back from it",
];

const whatChanged = [
  "Delivery visibility became more dependable and less personality-driven",
  "Reporting became more consistent across the organization",
  "Execution rhythm felt steadier and less reactive",
  "Leadership had stronger support for planning and scaling decisions",
  "Management overhead dropped because alignment no longer relied on repeated manual follow-up",
  "Engineering scale became more usable because the business got more control back from it",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://senatio.com" },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://senatio.com/case-studies" },
    { "@type": "ListItem", position: 3, name: "Growth-Stage Engineering Scale", item: "https://senatio.com/case-studies/growth-stage-engineering-scale" },
  ],
};

export default function GrowthStageEngineeringScalePage() {
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
                  Case Study · 02
                </p>
                <h2 className="section-title" id="hero-h">
                  How a growth-stage product company made engineering scale feel controlled <em>instead of chaotic</em>
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
                The company already had engineers. What it did not have was enough operating structure to make growth feel controlled. Reporting was inconsistent, delivery rhythm was unstable, and leadership could feel the organization getting heavier without becoming easier to steer. Senatio helped strengthen the execution layer around the team so scale created more leverage instead of more noise.
              </p>
              <div style={{ padding: "20px 24px", border: "1px solid var(--line)", background: "var(--bg-2)", borderRadius: "8px", alignSelf: "start" }}>
                <p className="mono" style={{ margin: "0 0 4px 0" }}>Client profile</p>
                <p style={{ margin: 0, fontSize: "1.05rem", color: "var(--fg)" }}>Growth-stage product company</p>
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
                  The company had crossed the line where informal coordination was no longer enough. Earlier on, a small number of strong people, high energy, and close communication could cover a lot of structural weakness. But as the business grew, those same habits started to create drag.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  The roadmap was broader. More workstreams were running in parallel. Delivery dependencies were becoming harder to see. Leadership needed clearer visibility into what was on track, what was blocked, and where pressure was building. Instead, too much of the real picture still had to be reconstructed manually by managers.
                </p>
                <p style={{ ...s.text, marginTop: "16px", color: "var(--fg)" }}>
                  This is the stage where many growth companies make an expensive mistake. They interpret the pain as a pure headcount issue and hire into a weak operating system. That usually creates more coordination cost, not more control.
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
                  If the company kept scaling without improving the operating layer underneath the team, every new hire risked adding more reporting inconsistency, more management drag, and more coordination overhead. The organization would become larger without becoming easier to run.
                </p>
                <p style={{ ...s.text, marginTop: "16px", color: "var(--fg)" }}>
                  That is a costly trap. You keep funding more capacity, but leadership still feels blind when clarity matters most. Scale starts looking impressive from the outside while becoming expensive to control from the inside.
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
                  Senatio treated the problem as an execution system problem, not a staffing problem.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  Instead of asking how to add more engineers faster, the work focused on how to make the existing and future team easier to run. That meant improving operating rhythm, strengthening reporting expectations, making progress and blockers more visible, and reducing the amount of manual intervention needed just to keep the organization aligned.
                </p>
                <p style={{ ...s.text, marginTop: "16px" }}>
                  The goal was not to install bureaucracy. The goal was to create usable control. Leadership needed to feel that scale was becoming more manageable, not more fragile.
                </p>
                <p style={{ ...s.text, marginTop: "16px", color: "var(--fg)" }}>
                  Senatio helped create a stronger execution layer around the team so growth did not depend on constant heroic coordination from managers and founders. Once that layer improved, the same engineering capacity became far more commercially useful because the business could actually see it, steer it, and trust it.
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
                The improvement came from recognizing that growth-stage engineering problems are rarely only about headcount. They are about whether the company has a strong enough operating system to turn headcount into output without drowning leadership in coordination cost. Senatio improved that operating system.
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
                A serious buyer should see that Senatio does not confuse motion with progress. It understands the point at which a growing team starts creating drag instead of leverage. It understands that visibility, rhythm, and control are not soft topics. They are part of the commercial usability of the team itself. That is what makes this feel different from generic delivery advice. It reads like operator thinking because it is operator thinking.
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
                The client did not just scale engineering. It made engineering scale feel more controlled, more visible, and more worth the investment behind it.
              </p>
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about making engineering scale feel more controlled</span>
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
