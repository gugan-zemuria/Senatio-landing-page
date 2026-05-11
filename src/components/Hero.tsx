"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

const routes = [
  { from: "Bengaluru", to: "San Francisco" },
  { from: "Bengaluru", to: "New York" },
  { from: "Bengaluru", to: "London" },
  { from: "Bengaluru", to: "Singapore" },
];

export default function Hero() {
  const [activeRoute, setActiveRoute] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoute((prev) => (prev + 1) % routes.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero section" id="home" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <h1 className="hero-headline" id="hero-h">
              <span className="word">Build,</span>{" "}
              <span className="word">
                <em>operate,</em>
              </span>{" "}
              <span className="word">and</span>{" "}
              <span className="word">
                <em>scale</em>
              </span>{" "}
              <span className="word">your</span>{" "}
              <span className="word">engineering</span>{" "}
              <span className="word">team</span>{" "}
              <span className="word">from</span>{" "}
              <span className="word india">India.</span>
            </h1>

            <p className="hero-sub">
              Senatio helps global companies launch high-performance engineering
              teams in weeks, run them with operator-led discipline, and scale
              without losing control.
            </p>

            <div className="hero-ctas">
              <Link href="/contact" className="btn btn-primary">
                <span>Book a call</span>
                <BtnArrow />
              </Link>
              <Link href="/how-it-works" className="btn">
                <span>See how it works</span>
                <BtnArrow />
              </Link>
            </div>

            <div className="hero-support">
              <span>Launch in 2 weeks or less</span>
              <span className="dot" />
              <span>Managed execution from day one</span>
              <span className="dot" />
              <span>Scale with more confidence</span>
            </div>
          </div>

          <aside className="hero-side" aria-label="Operating console">
            <div className="hero-side-head">
              <span>Operator Console</span>
              <span className="live">
                <span className="pulse" />
                Live
              </span>
            </div>
            <div className="hero-stat">
              <span className="k">Launch window</span>
              <span className="v">
                &le; 2 <em>weeks</em>
              </span>
            </div>
            <div className="hero-stat">
              <span className="k">Team baseline</span>
              <span className="v">
                2 <em>engineers</em>
              </span>
            </div>
            <div className="hero-stat">
              <span className="k">Operating model</span>
              <span className="v">
                <em>Managed</em>
              </span>
            </div>
            <div className="hero-stat">
              <span className="k">Scale posture</span>
              <span className="v">Up · Down</span>
            </div>

            <div className="hero-routes" aria-hidden="true">
              {routes.map((route, i) => (
                <div
                  className={`route${i === activeRoute ? " active" : ""}`}
                  key={route.to}
                >
                  <span>{route.from}</span>
                  <span className="arrow" />
                  <span>{route.to}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
