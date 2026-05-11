import type { Metadata } from "next";
import Link from "next/link";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export const metadata: Metadata = {
  title: "Engineering Team Scaling Partner | Senatio",
  description:
    "Scale your engineering team with more control using Senatio. Launch faster, add engineers cleanly, maintain quality, and reduce operational friction as your team grows.",
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

const scaleSupports: CardItem[] = [
  { num: "01", title: "Add capacity quickly", desc: "Scale your team up fast without losing quality or control." },
  { num: "02", title: "Keep reporting and visibility clearer", desc: "Maintain clear visibility into delivery as the team grows." },
  { num: "03", title: "Reduce disruption during growth", desc: "Minimize operational friction when adding new engineers." },
  { num: "04", title: "Support continuity and replacement", desc: "Team stays dependable even as composition changes." },
  { num: "05", title: "Maintain operating discipline", desc: "Preserve execution quality and operating standards at scale." },
];

export default function ScalingPage() {
  return (
    <>
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="lp4-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  Engineering Team Scaling
                </p>
                <h2 className="section-title" id="lp4-hero-h">
                  Scale your engineering team without <em>losing control.</em>
                </h2>
                <p className="section-lede" style={{ maxWidth: "68ch" }}>
                  Scaling an engineering team is not just about adding people. It
                  is about keeping delivery quality stable while the team changes
                  shape. Senatio helps companies scale engineering teams with
                  more structure, more visibility, and less operational drag.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp4-why-messy-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp4-why-messy-h">
                  Why scaling gets <em>messy.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                As engineering teams grow, coordination gets harder. Reporting
                often becomes less clear. Ownership gets blurry. Delivery quality
                can drift. What looked efficient at five engineers may break at
                ten or fifteen.
              </p>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem", marginTop: "16px" }}>
                That is why engineering scale requires more than hiring speed. It
                requires a stronger operating model around the team.
              </p>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="lp4-how-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp4-how-h">
                  How Senatio supports engineering <em>scale.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "640px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Senatio helps clients scale engineering teams from India without
                turning growth into operational chaos. We help clients add
                engineers quickly, maintain continuity, improve visibility, and
                preserve execution quality as the team grows.
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
              {scaleSupports.map((item) => (
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

        <section className="section" style={{ background: "var(--bg-2)" }} aria-labelledby="lp4-gain-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal data-delay="1">
                <h2 className="section-title" id="lp4-gain-h">
                  What clients <em>gain.</em>
                </h2>
              </div>
            </div>
            <div style={{ maxWidth: "600px" }} data-reveal>
              <p style={{ color: "var(--fg-2)", lineHeight: 1.65, fontSize: "1.05rem" }}>
                Clients get a cleaner scaling path, less management friction,
                and a more dependable engineering setup. That makes growth easier
                to sustain and easier to control.
              </p>
            </div>
            <div style={{ marginTop: "24px" }} data-reveal>
              <Link href="/contact" className="btn btn-primary">
                <span>Talk to us about scaling your engineering team</span>
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
