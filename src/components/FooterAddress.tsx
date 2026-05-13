"use client";

import { useState, useEffect } from "react";

function detectIndia(): boolean {
  // 1. Check cookie set by middleware (Cloudflare production / manual override)
  const cookies = document.cookie.split("; ");
  const geo = cookies.find((c) => c.startsWith("geo-country="));
  if (geo) return geo === "geo-country=IN";

  // 2. Fallback: timezone detection (localhost without cookie)
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz === "Asia/Kolkata" || tz === "Asia/Calcutta";
  } catch {
    return false;
  }
}

export default function FooterAddress() {
  const [isIndia, setIsIndia] = useState<boolean | null>(null);

  useEffect(() => {
    setIsIndia(detectIndia());
  }, []);

  // Render nothing until detection runs (avoids hydration mismatch)
  if (isIndia === null) return null;

  if (isIndia) {
    return (
      <>
        <p className="foot-addr">
          <strong>India</strong>
          Suite No. 33, 388 Vazhudavur Main Road<br />
          Shanmugapuram, Pondicherry 605009
        </p>
        <a href="mailto:contact@senatio.com" className="foot-email">contact@senatio.com</a>
      </>
    );
  }

  return (
    <>
      <p className="foot-addr">
        <strong>United States</strong>
        1007 N Orange St., 4th Floor, #1189<br />
        Wilmington, Delaware 19801
      </p>
      <a href="mailto:contact@senatio.com" className="foot-email">contact@senatio.com</a>
    </>
  );
}
