import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Pricing — Managed Engineering Capability | Senatio",
  description:
    "Senatio's transparent pricing model: one-time setup, monthly per-engineer managed pricing, and shared oversight for larger teams.",
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
];

export default function PricingPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="setup-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="setup-h">
                  One-time <em>setup fee</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                The setup fee covers the work required to launch the team
                properly. That includes sourcing, hiring, onboarding, and initial
                team setup.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="monthly-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="monthly-h">
                  All-inclusive monthly <em>per-engineer pricing</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Once the team is live, Senatio uses all-inclusive monthly pricing
                per engineer. This reflects the fact that clients are paying for
                managed capability, not just for salary pass-through.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                The monthly structure includes hiring support, operations support,
                continuity, delivery support, and the practical operating layer
                that helps the team work well over time.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="oversight-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="oversight-h">
                  Oversight for <em>larger teams</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                As teams grow, they may need an added layer of delivery or program
                support. That can include shared delivery leadership, engineering
                management support, or broader operating oversight where required.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="factors-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="factors-h">
                  What shapes <em>pricing</em>
                </h2>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
              }}
            >
              {pricingFactors.map((item, i) => (
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="why-h">
                  Why the model is structured <em>this way</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Engineering teams are not built from identical seats. A structured
                commercial model reflects the reality of how teams are launched,
                run, and supported in practice.
              </p>
            </div>
            <div style={{ marginTop: "24px" }} data-reveal>
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
