import type { Metadata } from "next";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Roles and Team Design from India | Senatio",
  description:
    "Explore the engineering roles Senatio helps global companies build from India, including frontend, backend, full-stack, QA, DevOps, data, AI, and technical leadership roles.",
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

const s = {
  text: { color: "var(--fg-2)" as const, lineHeight: 1.65 as const, fontSize: "1.05rem" as const, margin: 0 as const },
  textSm: { color: "var(--fg-2)" as const, lineHeight: 1.55 as const, fontSize: "0.95rem" as const, margin: 0 as const },
  stack: { display: "flex" as const, flexDirection: "column" as const, gap: "16px" as const },
  max: { maxWidth: "640px" as const },
};

const functionRoles = [
  { name: "Frontend engineers", desc: "For product interfaces, user-facing applications, and experience quality." },
  { name: "Backend engineers", desc: "For APIs, system logic, platform capability, integrations, and core application behavior." },
  { name: "Full-stack engineers", desc: "For teams that need flexibility across product delivery." },
  { name: "QA engineers", desc: "For release confidence, testing discipline, and product stability." },
  { name: "DevOps engineers", desc: "For infrastructure reliability, deployment workflows, observability, and resilience." },
  { name: "Data engineers", desc: "For pipelines, data systems, and structured movement of information." },
  { name: "AI engineers", desc: "For applied AI features, workflow support, and AI-enabled internal tooling where relevant." },
];

const levelRoles = [
  { name: "Junior engineers", desc: "Best when the operating structure already exists and the environment can support them well." },
  { name: "Mid-level engineers", desc: "Best for strong day-to-day delivery across product and platform work." },
  { name: "Senior engineers", desc: "Best for complex systems, stronger ownership, and higher reliability requirements." },
  { name: "Tech leads and engineering leads", desc: "Best when coordination, architecture direction, and delivery control matter more." },
];

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
    roles: "One engineering lead, three backend engineers, two frontend engineers, one QA engineer, one DevOps engineer, and one data or AI engineer where relevant.",
  },
];

export default function EngineeringRolesPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        {/* ── Hero ── */}
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
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Senatio helps clients build the right engineering team, not just fill individual seats. The right team depends on delivery goals, product complexity, stage of growth, and the operating reality around the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Think in team design ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="think-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="think-h">
                  Think in team design, not <em>isolated hires.</em>
                </h2>
              </div>
            </div>
            <div style={{ ...s.max, ...s.stack }} data-reveal>
              <p style={s.text}>
                One of the biggest mistakes companies make when building from India is thinking only in terms of individual roles. A stronger approach is to think in systems. The mix of roles often matters more than any one hire.
              </p>
            </div>
          </div>
        </section>

        {/* ── Roles by function ── */}
        <section className="section" aria-labelledby="func-roles-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="func-roles-h">
                  Roles by <em>function</em>
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
              {functionRoles.map((role) => (
                <article
                  key={role.name}
                  style={{
                    background: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                  data-reveal
                >
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                    {role.name}
                  </h3>
                  <p style={s.textSm}>{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Roles by level ── */}
        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="level-roles-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="level-roles-h">
                  Roles by <em>level</em>
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
              {levelRoles.map((role) => (
                <article
                  key={role.name}
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
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>
                    {role.name}
                  </h3>
                  <p style={s.textSm}>{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Example team shapes ── */}
        <section className="section" aria-labelledby="shapes-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="shapes-h">
                  Example team <em>shapes.</em>
                </h2>
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
                  <p style={s.textSm}>{shape.roles}</p>
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
                <span>Talk to us about your ideal team structure</span>
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
