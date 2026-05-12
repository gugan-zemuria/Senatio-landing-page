import type { Metadata } from "next";
import Loader from "@/components/Loader";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Positioning from "@/components/Positioning";
import BosIntro from "@/components/BosIntro";
import BosPin from "@/components/BosPin";
import Ledger from "@/components/Ledger";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Build, Operate, Scale, and Automate from India | Senatio",
  description:
    "Senatio helps global companies build and scale engineering teams from India with managed execution, workflow improvement, and practical custom software.",
  alternates: { canonical: "https://senatio.com" },
};

export default function Home() {
  return (
    <>
      <Loader />
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Positioning />
        <div className="section-divider" />

        <section className="section" aria-labelledby="two-ways-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="two-ways-h">
                  Two ways Senatio creates <em>value.</em>
                </h2>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px", paddingTop: "8px" }}>
              <article style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px" }} data-reveal>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "0 0 8px 0", color: "var(--fg)" }}>
                  Build, Operate, Scale
                </h3>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.6, fontSize: "0.95rem", margin: 0 }}>
                  Launch engineering capability from India with the right structure, a cleaner operating model, and the flexibility to grow or reshape the team over time.
                </p>
              </article>
              <article style={{ background: "var(--bg-2)", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px" }} data-reveal data-delay="1">
                <h3 style={{ fontSize: "1.15rem", fontWeight: 600, margin: "0 0 8px 0", color: "var(--fg)" }}>
                  Solve and Improve
                </h3>
                <p style={{ color: "var(--fg-2)", lineHeight: 1.6, fontSize: "0.95rem", margin: 0 }}>
                  Fix broken workflows, reduce repetitive manual work, improve visibility, automate internal bottlenecks, and build practical internal tools or software where needed.
                </p>
              </article>
            </div>
          </div>
        </section>

        <BosIntro />
        <BosPin />
        <div className="section-divider" />
        <Ledger />

        <section className="section" aria-labelledby="speed-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="speed-h">
                  Built for companies that need speed, control, and lower <em>operating drag.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Some clients need to launch an engineering team from India quickly. Others need to reduce management drag, fix workflow bottlenecks, digitize internal processes, or build software that solves specific operational problems. In many cases, they need both.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                Senatio is built for companies that want practical execution support, not vague consulting language. The focus stays on capacity, control, continuity, visibility, and real operational leverage.
              </p>
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
