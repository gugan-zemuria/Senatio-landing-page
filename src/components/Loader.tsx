"use client";

import { useEffect, useRef, useState } from "react";

let loadedInSession = false;

export default function Loader() {
  const [phase, setPhase] = useState<"hidden" | "playing" | "done">("hidden");
  const [pct, setPct] = useState(0);
  const streamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loadedInSession) return;

    loadedInSession = true;
    setPhase("playing");

    let current = 0;
    const timer = setInterval(() => {
      const inc =
        current < 70
          ? Math.random() * 6 + 3
          : Math.random() * 3 + 1;
      current = Math.min(100, current + inc);
      setPct(current);

      if (streamRef.current) {
        streamRef.current.scrollTop =
          streamRef.current.scrollHeight * (current / 100);
      }

      if (current >= 100) {
        clearInterval(timer);
        setTimeout(() => setPhase("done"), 500);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`loader${phase === "done" ? " done" : ""}`}
      aria-hidden="true"
    >
      <div className="loader-inner">
        <div className="loader-head">
          <span>Senatio · Operator&apos;s Broadsheet</span>
          <span className="accent">Starting Sequence</span>
        </div>
        <div className="loader-mark" style={{ display: "flex" }}>
          <img src="/senatio_dark_logo.svg" alt="Senatio" className="brand-logo logo-dark" style={{ height: "clamp(3rem, 8vw, 6rem)" }} />
          <img src="/senatio_light_logo.svg" alt="Senatio" className="brand-logo logo-light" style={{ height: "clamp(3rem, 8vw, 6rem)" }} />
        </div>
        <div className="loader-stream" ref={streamRef}>
          <div className="line">
            [<span className="ok">OK</span>] team.design.matrix ...............
            aligned
          </div>
          <div className="line">
            [<span className="ok">OK</span>] launch.readiness.window ..........
            open
          </div>
          <div className="line">
            [<span className="ok">OK</span>] operator.discipline.layer .........
            active
          </div>
          <div className="line">
            [<span className="ok">OK</span>] india.capability.network ..........
            live
          </div>
          <div className="line">
            [<span className="ok">OK</span>] delivery.visibility.system ........
            synced
          </div>
          <div className="line">
            [<span className="ok">OK</span>] continuity.support.routes .........
            stable
          </div>
          <div className="line">
            [<span className="ok">OK</span>] scale.posture.framework ...........
            ready
          </div>
        </div>
        <div className="loader-progress">
          <span className="loader-percent">
            <span className="num">
              {String(Math.floor(pct)).padStart(3, "0")}
            </span>
            <span className="of">/100</span>
          </span>
          <span>Preparing build / operate / scale</span>
        </div>
        <div className="loader-bar">
          <div
            className="loader-bar-fill"
            style={{ transform: `scaleX(${pct / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}
