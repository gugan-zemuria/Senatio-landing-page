

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

const levelRoles = [
  {
    level: "Level · 01",
    name: "Junior engineers",
    desc: "For execution-heavy environments where structure, ramp support, and cost efficiency matter.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    level: "Level · 02",
    name: "Mid-level engineers",
    desc: "For strong day-to-day delivery across product and engineering workstreams.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M3 12h6l3 -8 3 16 3 -8h3" />
      </svg>
    ),
  },
  {
    level: "Level · 03",
    name: "Senior engineers",
    desc: "For complex systems, deeper ownership, and stronger technical judgment.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01" />
      </svg>
    ),
  },
  {
    level: "Level · 04",
    name: "Tech leads",
    desc: "For leadership, architecture direction, and stronger team coordination.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
      </svg>
    ),
  },
];

const functionRoles = [
  {
    name: "Frontend engineers",
    desc: "Product interfaces, user-facing applications, and experience quality.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <rect x="3" y="4" width="18" height="14" rx="1" />
        <path d="M3 9h18M7 14h4" />
      </svg>
    ),
  },
  {
    name: "Backend engineers",
    desc: "Core systems, business logic, APIs, and platform capability.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
  },
  {
    name: "Full-stack engineers",
    desc: "Flexibility across product surfaces and engineering layers.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M3 12l4-4 4 4M21 12l-4 4-4-4M9 16l6-8" />
      </svg>
    ),
  },
  {
    name: "QA engineers",
    desc: "Testing discipline, release confidence, and product stability.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M9 11l3 3 7-7M21 12a9 9 0 11-6.2-8.6" />
      </svg>
    ),
  },
  {
    name: "DevOps engineers",
    desc: "Infrastructure reliability, deployment workflows, operational resilience.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
      </svg>
    ),
  },
  {
    name: "Data engineers",
    desc: "Pipelines, data systems, internal analytics support, and structured data movement.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M3 3v18h18M7 14l4-4 4 4 5-7" />
      </svg>
    ),
  },
  {
    name: "AI engineers",
    desc: "Applied AI features, workflow support, model operations, and AI-enabled internal tools where relevant.",
    icon: (
      <svg className="icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" aria-hidden="true">
        <path d="M3 3v18h18M7 14l4-4 4 4 5-7" />
      </svg>
    ),
  },
];

export default function Roles() {
  return (
    <section className="section roles" id="roles" aria-labelledby="roles-h">
      <div className="wrap">
        <div className="section-head">
          <div data-reveal data-delay="1">
            <h2 className="section-title" id="roles-h">
              Build the team you <em>actually need.</em>
            </h2>
            <p className="section-lede">
              From junior engineers to senior engineers and tech leads, Senatio
              helps clients build the right mix of talent for speed, cost, and
              delivery quality. We help clients think in terms of team design —
              not isolated seats.
            </p>
          </div>
        </div>

        <div className="roles-cluster">
          <div data-reveal>
            <h3 className="roles-block-title">
              Roles by <em>level</em>
            </h3>
            <p className="roles-block-lede">
              Different stages require different levels of engineering depth.
              Some teams need strong execution from junior and mid-level
              engineers; others need senior-heavy capability from the beginning.
            </p>
            <div className="role-grid cols-4">
              {levelRoles.map((role) => (
                <article className="role" key={role.name}>
                  <div className="role-head">
                    <span>{role.level}</span>
                    {role.icon}
                  </div>
                  <h4 className="role-name">{role.name}</h4>
                  <p className="role-desc">{role.desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div data-reveal data-delay="1">
            <h3 className="roles-block-title">
              Roles by <em>function</em>
            </h3>
            <p className="roles-block-lede">
              Senatio builds across the most common engineering functions needed
              for modern software teams.
            </p>
            <div className="role-grid cols-3">
              {functionRoles.map((role) => (
                <article className="role" key={role.name}>
                  <div className="role-head">
                    <span>Function</span>
                    {role.icon}
                  </div>
                  <h4 className="role-name">{role.name}</h4>
                  <p className="role-desc">{role.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="roles-foot">
          <p className="pull">
            We help clients build teams, <em>not just fill seats.</em>
          </p>
          <button
            className="btn"
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
  );
}
