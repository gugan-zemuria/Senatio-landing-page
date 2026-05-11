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
        <BosIntro />
        <BosPin />
        <div className="section-divider" />
        <Ledger />

        <section className="section" aria-labelledby="speed-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="speed-h">
                  Built for companies that want <em>speed and control.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Senatio is designed for companies that want to move quickly
                without creating unnecessary execution risk. Some clients need
                to launch an offshore engineering team from India fast. Others
                need to improve delivery quality, reduce management drag, or
                create a more dependable way to scale engineering capacity over
                time.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                In each case, the value is the same: faster launch, stronger
                execution, more visibility, and more reliable team growth.
              </p>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="exec-fit-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="exec-fit-h">
                  Where execution improvement <em>fits.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "620px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                In many cases, team performance is not only shaped by who gets
                hired. It is also shaped by how work moves across the team. Weak
                reporting, repetitive coordination, and manual processes can slow
                good teams down. Where useful, Senatio also helps improve
                execution around the engineering team through better workflows,
                clearer visibility, and practical automation.
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
