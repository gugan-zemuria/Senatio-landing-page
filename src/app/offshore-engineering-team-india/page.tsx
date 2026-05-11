import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Offshore Engineering Team in India | Senatio",
  description:
    "Build an offshore engineering team in India with Senatio. Launch faster, improve execution, and scale with managed support, stronger visibility, and less operational friction.",
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

const senatioDifferences = [
  "Faster launch timelines",
  "Clearer team design",
  "Managed onboarding",
  "Reporting and visibility",
  "Continuity and replacement support",
  "Cleaner scaling over time",
];

export default function OffshoreEngineeringPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="lp1-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Offshore Engineering Team in India
                </p>
                <h2 className="section-title" id="lp1-hero-h">
                  Build an offshore engineering team in India with more <em>speed and control.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps global companies build offshore engineering teams
                  in India that launch quickly, run with more discipline, and
                  scale without becoming hard to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp1-why-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp1-why-h">
                  Why companies build offshore engineering teams <em>in India.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                India remains one of the strongest markets in the world for
                engineering talent. Companies come to India for access to deeper
                talent pools, better long-term scalability, and stronger
                operating leverage. But building an offshore engineering team in
                India is not only a hiring problem. It is also an execution
                problem.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                Many companies can find engineers. Far fewer can build an
                offshore engineering team that is structured well, onboarded
                properly, and managed in a way that keeps delivery reliable over
                time. That is the gap Senatio is built to solve.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp1-diff-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp1-diff-h">
                  What Senatio does <em>differently.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Senatio does not position offshore team building as simple seat
                filling. We help clients define the right team structure, launch
                the team quickly, create operating discipline, and support
                continuity as the team grows.
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
              {senatioDifferences.map((item, i) => (
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp1-buying-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp1-buying-h">
                  What clients are really <em>buying.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Clients are not just buying offshore engineers from India. They
                are buying a managed engineering capability that reduces
                management burden and makes the team easier to operate with
                confidence.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp1-audience-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp1-audience-h">
                  Who this <em>is for.</em>
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
                "Founders building product teams",
                "Global startups expanding engineering capacity",
                "Growth-stage companies building from India",
                "Operators who need more reliable offshore execution",
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
                <span>Talk to us about your offshore engineering team</span>
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
