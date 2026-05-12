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
    "Understand Senatio's pricing model for managed engineering teams from India, including setup, monthly managed pricing, delivery oversight, and scaling support.",
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

const pricingFactors = [
  "Role mix",
  "Seniority mix",
  "Team size",
  "Level of oversight required",
  "Complexity of the operating model",
  "Execution support requirements where relevant",
];

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
                  Senatio&apos;s pricing model is built around managed engineering
                  capability. Clients are not paying for raw payroll cost. They
                  are paying for the ability to launch, run, support, and scale a
                  reliable engineering team from India with less friction and more
                  control.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three pricing phases — card grid ── */}
        <section
          className="section pricing"
          style={{ background: "var(--bg-2)" }}
          aria-labelledby="phases-h"
        >
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="phases-h">
                  Three phases, <em>one model.</em>
                </h2>
                <p className="section-lede">
                  Every engagement follows the same transparent structure — setup,
                  monthly managed pricing, and oversight as the team scales.
                </p>
              </div>
            </div>

            <div className="pricing-grid">
              <article className="price" data-reveal>
                <div className="price-head">
                  <span>Phase</span>
                  <span className="num">01</span>
                </div>
                <h3 className="price-title">
                  One-time <em>setup fee</em>
                </h3>
                <p className="price-desc">
                  Covers the work required to launch the team properly. Launch has
                  real value and real execution behind it — treated as a
                  meaningful phase, not invisible overhead.
                </p>
                <ul className="price-list">
                  <li>Sourcing</li>
                  <li>Hiring</li>
                  <li>Onboarding</li>
                  <li>Initial team setup</li>
                </ul>
              </article>

              <article className="price" data-reveal data-delay="1">
                <div className="price-head">
                  <span>Phase</span>
                  <span className="num">02</span>
                </div>
                <h3 className="price-title">
                  Monthly <em>per-engineer</em>
                </h3>
                <p className="price-desc">
                  All-inclusive. Reflects managed capability, not salary
                  pass-through — covering hiring support, operations, continuity,
                  delivery, and scaling flexibility.
                </p>
                <ul className="price-list">
                  <li>Hiring support</li>
                  <li>Operations support</li>
                  <li>Continuity &amp; replacement</li>
                  <li>Delivery support</li>
                  <li>Scale flexibility</li>
                </ul>
              </article>

              <article className="price" data-reveal data-delay="2">
                <div className="price-head">
                  <span>Phase</span>
                  <span className="num">03</span>
                </div>
                <h3 className="price-title">
                  Shared <em>oversight</em>
                </h3>
                <p className="price-desc">
                  As teams grow, an added layer of delivery or program support
                  keeps execution stable. Positioned as a shared operating layer,
                  not duplicated headcount.
                </p>
                <ul className="price-list">
                  <li>Delivery lead</li>
                  <li>Engineering manager</li>
                  <li>Program oversight</li>
                </ul>
              </article>
            </div>

            <div className="pricing-meta">
              <div data-reveal>
                <h4>Recommended starting point</h4>
                <p>
                  Most engagements begin with at least a 2-engineer team. A
                  single-engineer engagement is possible but treated as a premium
                  pilot or entry case.
                </p>
                <p>
                  A 2-engineer minimum supports the managed-team story properly
                  and makes the operating model meaningful from day one.
                </p>
              </div>
              <div data-reveal data-delay="1">
                <h4>What shapes pricing</h4>
                <ul>
                  {pricingFactors.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why this model + what to compare against ── */}
        <section className="section" aria-labelledby="why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-h">
                  Why the model is structured <em>this way.</em>
                </h2>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "32px",
                maxWidth: "680px",
              }}
              data-reveal
            >
              <p
                style={{
                  color: "var(--fg-2)",
                  lineHeight: 1.65,
                  fontSize: "1.05rem",
                  margin: 0,
                }}
              >
                Engineering teams are not built from identical seats. Different
                teams require different mixes of skill, support, structure, and
                oversight. A structured commercial model reflects how teams are
                actually launched, run, and scaled in practice.
              </p>

              <div
                style={{
                  borderTop: "1px solid var(--line)",
                  paddingTop: "28px",
                }}
              >
                <p
                  className="mono"
                  style={{ marginBottom: "14px", color: "var(--accent)" }}
                >
                  What to compare against
                </p>
                <p
                  style={{
                    color: "var(--fg-2)",
                    lineHeight: 1.65,
                    fontSize: "1.05rem",
                    margin: 0,
                  }}
                >
                  The real comparison is not raw payroll cost. The real comparison
                  is the cost, delay, and execution risk of trying to build and
                  manage the full operating layer alone. Senatio&apos;s value is
                  in reducing that burden while making the engineering team more
                  dependable from the start.
                </p>
              </div>

              <div>
                <Link href="/contact" className="btn btn-primary">
                  <span>Discuss team design and pricing</span>
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
