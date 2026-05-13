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

export default function FinalCta() {
  return (
    <section
      className="section final"
      id="contact"
      aria-labelledby="final-h"
    >
      <div className="wrap">
        <div className="final-frame">
          <p className="mono" data-reveal style={{ marginBottom: "8px" }}>
            Talk to us about your engineering team
          </p>
          <h2 className="final-headline" id="final-h" data-reveal data-delay="1">
            Build your India engineering team in <em>weeks.</em>
          </h2>
          <p className="final-sub" data-reveal data-delay="2">
            If you are exploring how to build, operate, or scale your engineering
            team from India, Senatio can help. Talk to us about team structure,
            launch timelines, operating support, and commercial structure.
          </p>
          <div className="final-actions" data-reveal data-delay="3">
            <button
              className="btn btn-primary"
              data-cal-namespace="30min"
              data-cal-link="senatio/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            >
              <span>Book a call</span>
              <BtnArrow />
            </button>
            <span className="small">
              Launch fast &middot; Operate with discipline &middot; Scale with confidence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
