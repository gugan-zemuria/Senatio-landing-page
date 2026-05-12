import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Industry-Specific Engineering Solutions | Senatio",
  description:
    "See how Senatio helps different companies build engineering teams from India, improve workflows, and solve execution problems through practical systems and automation.",
};

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const solutions = [
  { num: "01", title: "B2B SaaS companies", desc: "Build product and platform teams from India, improve delivery rhythm, and reduce operating drag around the roadmap." },
  { num: "02", title: "Growth-stage companies", desc: "Scale engineering with more control, better visibility, and less management friction." },
  { num: "03", title: "Operations-heavy businesses", desc: "Digitize workflows, automate repetitive internal work, and improve operational throughput." },
  { num: "04", title: "Manufacturing and process-heavy businesses", desc: "Replace manual handling with clearer digital workflows, stronger visibility, and better operating control." },
];

export default function IndustrySolutionsPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="is-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>Industry Solutions</p>
                <h2 className="section-title" id="is-hero-h">
                  Industry solutions built around <em>execution.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Different companies have different execution problems. Senatio helps each one build the right engineering capability from India while solving the workflow, coordination, and internal systems issues that slow delivery down.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="is-solutions-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="is-solutions-h">
                  How we help different <em>companies.</em>
                </h2>
              </div>
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}>
              {solutions.map((item) => (
                <article key={item.title} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }} data-reveal>
                  <span className="mono" style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{item.num}</span>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 600, margin: 0, color: "var(--fg)" }}>{item.title}</h3>
                  <p style={{ color: "var(--fg-2)", fontSize: "0.925rem", lineHeight: 1.55, margin: 0 }}>{item.desc}</p>
                </article>
              ))}
            </div>
            <div style={{ marginTop: "32px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about your company and operating model</span>
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
