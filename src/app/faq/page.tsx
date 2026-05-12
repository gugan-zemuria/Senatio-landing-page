import type { Metadata } from "next";
import Script from "next/script";
import Grain from "@/components/Grain";
import Navbar from "@/components/Navbar";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this outsourcing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Senatio is built around managed engineering capability from India. The model is designed to give clients stronger operating structure, more continuity, and more control than a traditional outsourcing relationship.",
      },
    },
    {
      "@type": "Question",
      name: "Is this staff augmentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Senatio is not built around loose seat-filling. The model is based on building and operating engineering teams with structure, visibility, and support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only help with hiring?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Hiring is only one part of the model. Senatio also helps with launch, operating discipline, continuity, scale, workflow improvement, and internal solution work where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help improve workflows too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where workflow bottlenecks are hurting execution. Senatio can help improve coordination, visibility, reporting, and practical automation around engineering delivery.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can a team be launched?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many cases, teams can be launched in 2 weeks or less, depending on the roles, hiring complexity, and team shape required.",
      },
    },
    {
      "@type": "Question",
      name: "Can we start small?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In most cases, a 2-engineer team is the stronger starting point, but smaller pilot structures can still be discussed where appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "Can we scale later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The model is designed to help clients scale up as needs grow and reduce or reshape the team more cleanly when priorities change.",
      },
    },
    {
      "@type": "Question",
      name: "How is pricing structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pricing is structured around a setup phase, monthly managed team pricing, and separately scoped execution improvement or internal solution work where needed.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Senatio different from a recruiting firm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recruiting firms help fill roles. Senatio helps clients build, operate, and scale engineering teams from India with the structure needed to make those teams work well over time.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Senatio different from a body-shop model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The focus is not on renting seats. The focus is on managed engineering capability, execution quality, operating support, and cleaner long-term scaling.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "FAQ on Building Engineering Teams from India | Senatio",
  description:
    "Answers to common questions about building engineering teams from India, managed execution, team pricing, workflow improvement, and scaling with Senatio.",
};

export default function FaqPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Grain />
      <Navbar />
      <main>
        <section className="section" aria-labelledby="faq-hero-h">
          <div className="wrap">
            <div className="section-head">
              <div data-reveal>
                <p className="mono" style={{ marginBottom: "16px" }}>
                  FAQ
                </p>
                <h2 className="section-title" id="faq-hero-h">
                  Frequently asked <em>questions.</em>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
