"use client";

import { useState, useEffect } from "react";

type Region = "us" | "india";

function detectRegion(): Region {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz && tz.startsWith("America/")) {
      return "us";
    }
  } catch {
    /* fall through */
  }
  return "india";
}

export default function FooterAddress() {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    setRegion(detectRegion());
  }, []);

  if (region === "us") {
    return (
      <li className="foot-addr">
        <strong>United States</strong>
        1007 N Orange St., 4th Floor, #1189<br />
        Wilmington, Delaware 19801
      </li>
    );
  }

  return (
    <li className="foot-addr">
      <strong>India</strong>
      Mercemur Technologies Private Limited<br />
      Suite No. 33, 388 Vazhudavur Main Road<br />
      Shanmugapuram, Pondicherry 605009
    </li>
  );
}
