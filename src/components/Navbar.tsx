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

function Dropdown({ label, items, href }: { label: string; items: { href: string; label: string }[]; href?: string }) {
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

  return (
    <li
      ref={ref}
      className={`nav-dropdown ${open ? "open" : ""}`}
      onPointerDown={(e) => {
        if (window.innerWidth > 920) return;
        e.preventDefault();
        setOpen((v) => !v);
      }}
    >
      {href ? (
        <Link href={href} className="nav-dropdown-trigger" onClick={() => setOpen(false)}>
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
            <Link href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default function Navbar() {
  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Senatio home">
          <img src="/senatio_dark_logo.svg" alt="Senatio" className="brand-logo logo-dark" />
          <img src="/senatio_light_logo.svg" alt="Senatio" className="brand-logo logo-light" />
        </Link>
        <ul className="nav-links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/how-it-works">How It Works</Link>
          </li>
          <Dropdown label="Solutions" items={solutionsLinks} />
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
          <Dropdown label="Case Studies" href="/case-studies" items={caseStudyLinks} />
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
