import Link from "next/link";
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
        <Link href="/" className="brand" aria-label="Senatio home">
          <img src="/senatio_dark_logo.svg" alt="Senatio" className="brand-logo logo-dark" />
          <img src="/senatio_light_logo.svg" alt="Senatio" className="brand-logo logo-light" />
          <span className="brand-suffix">Build · Operate · Scale</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <li>
            <Link href="/engineering-roles">Engineering Roles</Link>
          </li>
          <li>
            <Link href="/execution-improvement">Execution Improvement</Link>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <li>
            <Link href="/case-studies">Case Studies</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary">
            <span>Book a call</span>
            <BtnArrow />
          </Link>
        </div>
      </div>
    </nav>
  );
}
