import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Roles from "@/components/Roles";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Roles and Team Design from India | Senatio",
  description:
    "Explore frontend, backend, full-stack, QA, DevOps, data, AI, and leadership roles Senatio helps global companies build from India.",
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

const teamShapes = [
  {
    name: "Lean startup team",
    roles: "One senior full-stack engineer, two mid-level full-stack engineers, one QA engineer.",
  },
  {
    name: "Product build team",
    roles: "One tech lead, two backend engineers, two frontend engineers, one QA engineer, one DevOps engineer.",
  },
  {
    name: "Scale-up delivery team",
    roles: "One engineering lead, three mid-level backend engineers, two frontend engineers, one QA engineer, one DevOps engineer, one data or AI engineer where relevant.",
  },
];

export default function EngineeringRolesPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="roles-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Engineering Roles
                </p>
                <h2 className="section-title" id="roles-hero-h">
                  Engineering roles we help build <em>from India.</em>
                </h2>
                <p className="section-lede">
                  Senatio helps clients build the right engineering team, not
                  just hire individual seats. The right team is shaped by
                  delivery goals, product complexity, stage of growth, and the
                  way work needs to get done.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="think-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <h2 className="section-title" id="think-h">
                  Think in teams, not <em>isolated hires.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  One of the biggest mistakes companies make when building
                  engineering teams in India is thinking only in terms of single
                  positions. A stronger approach is to think about the team as a
                  system. The right mix of roles often matters more than any one
                  hire.
                </p>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Some teams need a lean build with strong full-stack execution.
                  Others need more backend depth, stronger QA discipline, or a
                  more senior technical layer from the beginning. Senatio helps
                  clients think through that mix before hiring starts, so the
                  team is designed with real delivery needs in mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Roles />

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="mix-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="mix-h">
                  How to think about <em>team mix.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                The best team design depends on what the company is trying to
                accomplish. A startup looking to move fast on product might need
                a compact full-stack team. A growth-stage company may need more
                defined frontend, backend, QA, and DevOps support. A company
                modernizing internal systems may need stronger backend, DevOps,
                and data capability.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                Senatio helps clients map team shape to business reality, not to
                abstract org charts.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="shapes-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="shapes-h">
                  Example team <em>shapes.</em>
                </h2>
                <p className="section-lede">
                  Every team is different, but these common patterns give a
                  sense of how teams are composed in practice.
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {teamShapes.map((shape) => (
                <article
                  key={shape.name}
                  style={{
                    borderTop: "1px solid var(--accent)",
                    paddingTop: "16px",
                    background: "var(--bg)",
                    padding: "24px",
                    borderRadius: "8px",
                  }}
                  data-reveal
                >
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "1.15rem",
                      margin: "0 0 12px",
                      fontWeight: 380,
                    }}
                  >
                    {shape.name}
                  </h3>
                  <p style={{ color: "var(--fg-2)", lineHeight: 1.55, margin: 0, fontSize: "0.95rem" }}>
                    {shape.roles}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="planning-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="planning-h">
                  Why role planning <em>matters.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                A well-designed team launches faster, performs better, and
                becomes easier to scale. Better role planning also makes pricing
                more sensible, hiring more targeted, and delivery expectations
                more realistic.
              </p>
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about your ideal team structure</span>
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
