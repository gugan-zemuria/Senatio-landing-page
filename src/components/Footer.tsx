export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="foot-brand">
              Senatio<em>.</em>
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
            </ul>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Locations</h5>
            <ul>
              <li>Bengaluru · IND</li>
              <li>New York · USA</li>
              <li>London · GBR</li>
            </ul>
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
