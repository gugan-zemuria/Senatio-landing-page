import Link from "next/link";
import FooterAddress from "./FooterAddress";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="foot-brand">
              <img src="/senatio_dark_logo.svg" alt="Senatio" className="brand-logo logo-dark" />
              <img src="/senatio_light_logo.svg" alt="Senatio" className="brand-logo logo-light" />
            </div>
            <p className="foot-tag">
              An operator-led partner for global companies building engineering
              teams from India.
            </p>
            <div style={{ marginTop: "20px" }}>
              <p style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "10px" }}>
                Backed by
              </p>
              {/* Dark mode: SVG logo inverted to white so it's visible on dark background */}
              <img
                src="/zemuriaco_logo.svg"
                alt="Zemuria Venture Studio"
                className="logo-dark"
                style={{ width: "160px", height: "42px", objectFit: "contain", objectPosition: "left center", filter: "brightness(0) invert(1)" }}
              />
              {/* Light mode: black PNG logo visible on light background */}
              <img
                src="/ZVS_logo_blk.png"
                alt="Zemuria Venture Studio"
                className="logo-light"
                style={{ width: "160px", height: "42px", objectFit: "contain", objectPosition: "left center" }}
              />
            </div>
          </div>
          <div className="foot-col">
            <h5>Capability</h5>
            <ul>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/engineering-roles">Engineering Roles</Link></li>
              <li><Link href="/execution-improvement">Execution Improvement</Link></li>
              <li><Link href="/internal-tools-custom-software">Internal Tools</Link></li>
              <li><Link href="/industry-solutions">Industry Solutions</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/offshore-engineering-team-india">Offshore Teams</Link></li>
              <li><Link href="/remote-engineering-team-india">Remote Teams</Link></li>
              <li><Link href="/managed-engineering-teams">Managed Teams</Link></li>
              <li><Link href="/engineering-team-scaling">Team Scaling</Link></li>
              <li><Link href="/engineering-workflow-automation">Workflow Automation</Link></li>
            </ul>
          </div>
          <div className="foot-col">
            <div className="foot-col-inner">
              <h5>Company</h5>
              <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="foot-col-inner">
              <h5>Office</h5>
              <FooterAddress />
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="foot-copy">Copyright &copy; 2024–2026 by Senatio.</span>
          <span className="foot-legal">a <a href="https://zemuria.com/" target="_blank" rel="noopener noreferrer" className="foot-link">Zemuria Inc.</a> Brand. Contracts are executed by the relevant entity ( Zemuria Inc. USA or Mercemur Technologies Pvt Ltd, India).</span>
        </div>
      </div>
    </footer>
  );
}
