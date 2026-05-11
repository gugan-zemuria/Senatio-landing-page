import ThemeToggle from "./ThemeToggle";

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

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <a href="#home" className="brand" aria-label="Senatio home">
          <img src="/senatio_dark_logo.svg" alt="Senatio" className="brand-logo logo-dark" />
          <img src="/senatio_light_logo.svg" alt="Senatio" className="brand-logo logo-light" />
          <span className="brand-suffix">Build · Operate · Scale</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#roles">Engineering Roles</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#cases">Case Studies</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary">
            <span>Book a call</span>
            <BtnArrow />
          </a>
        </div>
      </div>
    </nav>
  );
}
