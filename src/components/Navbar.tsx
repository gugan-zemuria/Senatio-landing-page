"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
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

const solutionsLinks = [
  { href: "/engineering-roles", label: "Engineering Roles" },
  { href: "/execution-improvement", label: "Execution Improvement" },
  { href: "/internal-tools-custom-software", label: "Internal Tools" },
  { href: "/industry-solutions", label: "Industry Solutions" },
];

const caseStudyLinks = [
  { href: "/case-studies/b2b-saas-engineering-capacity", label: "B2B SaaS Engineering Capacity" },
  { href: "/case-studies/growth-stage-engineering-scale", label: "Growth-Stage Engineering Scale" },
  { href: "/case-studies/manufacturing-digital-workflows", label: "Manufacturing Digital Workflows" },
];

function Dropdown({ label, items, href, onClose }: { label: string; items: { href: string; label: string }[]; href?: string; onClose?: () => void }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onLeave = () => setOpen(false);
    const onEnter = () => setOpen(true);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const handleItemClick = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  return (
    <li
      ref={ref}
      className={`nav-dropdown ${open ? "open" : ""}`}
      onPointerDown={(e) => {
        if (window.innerWidth > 920) return;
        // Don't prevent default here to allow links to work, 
        // but we need to toggle the dropdown if clicking the trigger area
      }}
    >
      {href ? (
        <Link 
          href={href} 
          className="nav-dropdown-trigger" 
          onClick={(e) => {
            if (window.innerWidth <= 920) {
              e.preventDefault();
              setOpen(!open);
            } else {
              handleItemClick();
            }
          }}
        >
          {label}
          <svg className="nav-dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </Link>
      ) : (
        <button className="nav-dropdown-trigger" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
          {label}
          <svg className="nav-dropdown-arrow" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      )}
      <ul className="nav-dropdown-menu">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={handleItemClick}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize if screen becomes desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920 && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <nav className={`nav ${mobileOpen ? "mobile-open" : ""}`} aria-label="Primary">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Senatio home" onClick={() => setMobileOpen(false)}>
          <img src="/senatio_dark_logo.svg" alt="Senatio" className="brand-logo logo-dark" />
          <img src="/senatio_light_logo.svg" alt="Senatio" className="brand-logo logo-light" />
        </Link>

        <ul className={`nav-links ${mobileOpen ? "show" : ""}`}>
          <li>
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
          </li>
          <li>
            <Link href="/how-it-works" onClick={() => setMobileOpen(false)}>How It Works</Link>
          </li>
          <Dropdown label="Solutions" items={solutionsLinks} onClose={() => setMobileOpen(false)} />
          <li>
            <Link href="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
          </li>
          <Dropdown label="Case Studies" href="/case-studies" items={caseStudyLinks} onClose={() => setMobileOpen(false)} />
          <li>
            <Link href="/faq" onClick={() => setMobileOpen(false)}>FAQ</Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          </li>
          <li className="mobile-only-cta">
            <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
              <span>Book a call</span>
              <BtnArrow />
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-primary desktop-only-cta">
            <span>Book a call</span>
            <BtnArrow />
          </Link>
          
          <button 
            className="nav-mobile-toggle" 
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className={`hamburger ${mobileOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
      {/* Mobile Backdrop */}
      <div 
        className={`nav-backdrop ${mobileOpen ? "show" : ""}`} 
        onClick={() => setMobileOpen(false)}
      />
    </nav>
  );
}
