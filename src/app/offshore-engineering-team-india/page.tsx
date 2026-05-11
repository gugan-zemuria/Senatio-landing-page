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

interface CardItem {
  num: string;
  title: string;
  desc: string;
}

const senatioDifferences: CardItem[] = [
  { num: "01", title: "Faster launch timelines", desc: "Teams structured and launched quickly without sacrificing quality." },
  { num: "02", title: "Clearer team design", desc: "Role definition and team structure aligned to your product and platform needs." },
  { num: "03", title: "Managed onboarding", desc: "Engineers onboarded into your workflows and tooling from day one." },
  { num: "04", title: "Reporting and visibility", desc: "Clear visibility into team performance, delivery, and operating health." },
  { num: "05", title: "Continuity and replacement support", desc: "Team stays dependable as people and priorities shift." },
  { num: "06", title: "Cleaner scaling over time", desc: "Scale up or down without disrupting execution quality." },
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
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
                paddingTop: "24px",
              }}
            >
              {senatioDifferences.map((item) => (
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
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "20px",
              }}
            >
              {[
                { num: "01", title: "Founders", desc: "Founders building product teams that need dependable offshore engineering." },
                { num: "02", title: "Global startups", desc: "Global startups expanding engineering capacity from India." },
                { num: "03", title: "Growth-stage companies", desc: "Growth-stage companies building from India with more structure." },
                { num: "04", title: "Operators", desc: "Operators who need more reliable offshore execution and visibility." },
              ].map((item) => (
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
