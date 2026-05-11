import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Build a Remote Engineering Team in India | Senatio",
  description:
    "Senatio helps companies build remote engineering teams in India with faster hiring, managed onboarding, delivery discipline, and long-term scaling support.",
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

const howHelps = [
  "Team structure planning",
  "Faster remote hiring",
  "Onboarding support",
  "Delivery rhythm and reporting",
  "Continuity support",
  "Scaling without losing clarity",
];

export default function RemoteEngineeringPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="lp2-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Remote Engineering Team in India
                </p>
                <h2 className="section-title" id="lp2-hero-h">
                  Build a remote engineering team in India that <em>actually works well.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Building a remote engineering team in India is easy to talk
                  about and much harder to execute well. Senatio helps companies
                  build remote teams that launch fast, run with structure, and
                  stay dependable as they grow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp2-challenge-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp2-challenge-h">
                  The challenge with remote engineering <em>teams.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                A remote engineering team can look strong on paper and still
                struggle in practice. Weak onboarding, unclear ownership, poor
                reporting, and loose delivery rhythm can quickly turn remote
                scale into remote chaos.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                That is why remote team success depends on more than just hiring
                talent. It depends on how the team is structured, how it is
                launched, and how the operating layer around the team is handled.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp2-how-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp2-how-h">
                  How Senatio <em>helps.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Senatio helps clients build remote engineering teams in India
                with more structure from day one. We help define role mix,
                support hiring, onboard engineers into the right workflows, and
                create steadier delivery rhythm as the team settles in.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "16px",
                paddingTop: "24px",
              }}
            >
              {howHelps.map((item, i) => (
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp2-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp2-why-h">
                  Why this <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                A remote engineering team should reduce constraints, not create
                new ones. The right structure makes the team easier to manage,
                easier to scale, and more likely to deliver consistently over
                time.
              </p>
            </div>
            <div style={{ marginTop: "24px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Discuss your remote team design</span>
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
