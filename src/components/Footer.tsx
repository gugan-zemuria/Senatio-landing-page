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
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                color: "var(--accent)",
              }}
            >
              <span className="status-dot" aria-hidden="true" />
              <span style={{ color: "var(--muted)" }}>Operational</span>
            </div>
          </div>
          <div className="foot-col">
            <h5>Capability</h5>
            <ul>
              <li><Link href="/how-it-works">How It Works</Link></li>
              <li><Link href="/engineering-roles">Engineering Roles</Link></li>
              <li><Link href="/execution-improvement">Execution Improvement</Link></li>
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
          <span>&copy; Senatio · Build · Operate · Scale</span>
          <span>Managed engineering capability from India</span>
        </div>
      </div>
    </footer>
  );
}
