import Link from "next/link";

const BtnArrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Positioning() {
  return (
    <section className="section positioning" aria-labelledby="positioning-h">
      <div className="wrap">
        <div className="grid">
          <h2 className="positioning-display" id="positioning-h" data-reveal>
            More than hiring.<br />
            We help companies <em>build and solve.</em>
          </h2>

          <div className="positioning-body" data-reveal data-delay="2">
            <p>
              Many companies come to India for talent, scale, and better long-term operating leverage. But hiring engineers is only one part of the problem. The deeper challenge is building a team that actually works well and fixing the internal execution issues that slow the business down.
            </p>
            <p>
              Senatio helps clients do both. We help them build engineering teams from India with the right structure, faster launch, cleaner onboarding, and stronger operating discipline. We also help solve execution problems around the team through workflow improvement, automation, internal tools, and custom systems built for the way the company actually works.
            </p>
            <p>
              The result is not just more headcount. It is more usable engineering capacity and better execution across the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
