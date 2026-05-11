import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Managed Engineering Teams from India | Senatio",
  description:
    "Senatio provides managed engineering teams from India with hiring support, onboarding, delivery oversight, continuity, and scaling support built into the model.",
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

const includedItems = [
  "Sourcing and hiring",
  "Onboarding and team alignment",
  "Delivery oversight",
  "Reporting and visibility",
  "Continuity and replacement support",
  "Scaling flexibility",
  "Operational discipline around the team",
];

export default function ManagedEngineeringPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="lp3-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Managed Engineering Teams
                </p>
                <h2 className="section-title" id="lp3-hero-h">
                  Managed engineering teams from India, not just <em>hired seats.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps global companies build managed engineering teams
                  from India. The focus is not only on hiring engineers. The
                  focus is on making the team launch well, run reliably, and
                  scale with more control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp3-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp3-why-h">
                  Why managed engineering capability <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                The biggest mistake companies make when building from India is
                treating the entire problem as recruiting. Hiring matters, but
                the deeper problem is operational. Teams need onboarding,
                reporting, continuity, and structure. Without that, even strong
                hires can underperform.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                Senatio is built around managed engineering capability. That
                means clients get more than headcount. They get the operating
                layer that helps the team function well.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp3-included-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp3-included-h">
                  What is <em>included.</em>
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
              {includedItems.map((item, i) => (
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp3-diff-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp3-diff-h">
                  How this is different from staff <em>augmentation.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Staff augmentation focuses on filling seats. Managed engineering
                teams focus on building dependable execution capacity. Senatio
                is designed for clients who want a stronger long-term engineering
                setup from India, not just short-term seat coverage.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp3-audience-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp3-audience-h">
                  Who this works best <em>for.</em>
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
              {[
                "Companies building long-term product capacity",
                "Teams that want more visibility and control",
                "Companies that do not want to build the full operating layer alone",
                "Founders who want speed without losing discipline",
              ].map((item, i) => (
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
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about managed engineering teams</span>
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
