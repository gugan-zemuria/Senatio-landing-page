import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Team Case Studies & Delivery Outcomes | Senatio",
  description:
    "See how Senatio helps companies launch engineering teams from India faster, improve delivery execution, and scale with more structure and control.",
};

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const caseStudies = [
  {
    title: "B2B SaaS Engineering Capacity",
    slug: "b2b-saas-engineering-capacity",
    tag: "Build, Operate, Scale",
    summary: "How a global B2B SaaS company expanded engineering capacity from India without taking on the usual hiring, payroll, and compliance burden.",
  },
  {
    title: "Growth-Stage Engineering Scale",
    slug: "growth-stage-engineering-scale",
    tag: "Execution Improvement",
    summary: "How a growth-stage product company made engineering scale feel controlled instead of chaotic through better visibility, rhythm, and operating structure.",
  },
  {
    title: "Manufacturing Digital Workflows",
    slug: "manufacturing-digital-workflows",
    tag: "Workflow Automation",
    summary: "How a manufacturing giant replaced physical process handling with digital workflows, practical automation, and stronger operating control.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="cases-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Case Studies
                </p>
                <h2 className="section-title" id="cases-hero-h">
                  Proof of launch speed and <em>execution.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "64ch" }}>
                  Senatio is built for companies that need engineering capacity quickly, but still want structure, continuity, execution discipline, and control.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="intro-h">
          <div className="wrap">
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Our work is measured by how quickly teams launch, how well they run, and how cleanly they scale. Each engagement is different, but the focus stays the same: practical execution, stronger delivery, and teams that hold together over time.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="cases-grid-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="cases-grid-h">
                  Detailed case <em>studies.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
              {caseStudies.map((cs) => (
                <Link key={cs.slug} href={`/case-studies/${cs.slug}`} style={{ textDecoration: "none" }}>
                  <article style={{ background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: "12px", padding: "28px", height: "100%", display: "flex", flexDirection: "column", transition: "background .3s ease" }} data-reveal>
                    <p className="mono" style={{ marginBottom: "12px", color: "var(--accent)" }}>
                      {cs.tag}
                    </p>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.15rem", margin: "0 0 12px", fontWeight: 380, color: "var(--fg)" }}>
                      {cs.title}
                    </h3>
                    <p style={{ color: "var(--fg-2)", lineHeight: 1.55, margin: 0, fontSize: "0.95rem" }}>
                      {cs.summary}
                    </p>
                    <div style={{ marginTop: "auto", paddingTop: "16px" }}>
                      <span className="btn" style={{ fontSize: "12.5px", padding: "8px 14px" }}>
                        <span>Read case study</span>
                        <BtnArrow />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="outcomes-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="outcomes-h">
                  Common outcome <em>themes.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
              {[
                "Faster launch timelines",
                "Stronger delivery consistency",
                "Better reporting and visibility",
                "Cleaner scaling decisions",
                "Reduced management burden on the client side",
              ].map((item, i) => (
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
            <div style={{ marginTop: "32px" }} data-reveal>
              <button
                className="btn btn-primary"
                data-cal-namespace="30min"
                data-cal-link="senatio/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              >
                <span>Talk to us about your engineering team</span>
                <BtnArrow />
              </button>
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
