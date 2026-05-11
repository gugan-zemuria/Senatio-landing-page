"use client";

import { useEffect, useRef } from "react";

const faqs = [
  {
    q: "Is this outsourcing?",
    a: "No. Senatio is built around managed engineering capability from India. The model is designed to give clients stronger operating structure, more continuity, and more control than a traditional outsourcing relationship.",
  },
  {
    q: "Is this staff augmentation?",
    a: "No. Senatio is not built around loose seat-filling. The model is based on building and operating engineering teams with structure, visibility, and support.",
  },
  {
    q: "Do you only help with hiring?",
    a: "No. Hiring is only one part of the model. Senatio also helps with team setup, onboarding, operating discipline, continuity, and scale.",
  },
  {
    q: "Do you help improve workflows too?",
    a: "Yes, where workflow bottlenecks are hurting execution. Senatio can help improve coordination, visibility, reporting, and practical automation around engineering delivery.",
  },
  {
    q: "How quickly can a team be launched?",
    a: "In many cases, teams can be launched in 2 weeks or less, depending on the roles, hiring complexity, and team shape required.",
  },
  {
    q: "Can we start small?",
    a: "Yes. In most cases, a 2-engineer team is the stronger starting point, but smaller pilot structures can still be discussed where appropriate.",
  },
  {
    q: "Can we scale later?",
    a: "Yes. The model is designed to help clients scale up as needs grow and reduce team size cleanly when priorities change.",
  },
  {
    q: "How is pricing structured?",
    a: "Pricing is structured around a setup phase, all-inclusive monthly managed pricing, and added oversight support for larger teams where needed.",
  },
  {
    q: "What makes Senatio different from a recruiting firm?",
    a: "Recruiting firms help fill roles. Senatio helps clients build, operate, and scale engineering teams from India with the structure needed to make those teams work well over time.",
  },
  {
    q: "What makes Senatio different from a body-shop model?",
    a: "The focus is not on renting seats. The focus is on managed engineering capability, execution quality, operating support, and cleaner long-term scaling.",
  },
];

export default function Faq() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = listRef.current?.querySelectorAll(".faq-item");
    if (!items) return;

    const handleToggle = (e: Event) => {
      const target = e.currentTarget as HTMLDetailsElement;
      if (target.open) {
        items.forEach((other) => {
          if (other !== target) (other as HTMLDetailsElement).open = false;
        });
      }
    };

    items.forEach((item) => item.addEventListener("toggle", handleToggle));
    return () => {
      items.forEach((item) => item.removeEventListener("toggle", handleToggle));
    };
  }, []);

  return (
    <section className="section" id="faq" aria-labelledby="faq-h">
      <div className="wrap">
        <div className="section-head">
          <div data-reveal data-delay="1">
            <h2 className="section-title" id="faq-h">
              Questions clients <em>usually ask.</em>
            </h2>
            <p className="section-lede">
              From launch speed to pricing structure to execution support, here
              are the questions teams typically ask before getting started.
            </p>
          </div>
        </div>

        <div className="faq-list" ref={listRef}>
          {faqs.map((faq, i) => (
            <details className="faq-item" key={i} data-reveal>
              <summary>
                <span className="faq-num">
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="faq-q">{faq.q}</span>
                <span className="faq-toggle" aria-hidden="true" />
              </summary>
              <div className="faq-a">
                <span className="faq-spacer" />
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
