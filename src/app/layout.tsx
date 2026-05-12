import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
  variable: "--font-fraunces",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://senatio.com"),
  title: "Build, Operate & Scale Engineering Teams in India | Senatio",
  description:
    "Senatio helps global companies build and scale engineering teams from India with managed execution, workflow improvement, and practical custom software.",
  keywords: [
    "engineering teams India",
    "hire engineers India",
    "managed engineering teams",
    "offshore engineering India",
    "build engineering team India",
    "engineering team scaling",
  ],
  authors: [{ name: "Senatio", url: "https://senatio.com" }],
  creator: "Senatio",
  publisher: "Senatio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://senatio.com",
    siteName: "Senatio",
    title: "Build, Operate & Scale Engineering Teams in India | Senatio",
    description:
      "Senatio helps global companies build and scale engineering teams from India with managed execution, workflow improvement, and practical custom software.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Senatio – Build, Operate & Scale Engineering Teams from India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Build, Operate & Scale Engineering Teams in India | Senatio",
    description:
      "Senatio helps global companies build and scale engineering teams from India with managed execution, workflow improvement, and practical custom software.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "google53765785b38c8f17",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head />
      <body suppressHydrationWarning>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("senatio-theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`,
          }}
        />
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Senatio",
              url: "https://senatio.com",
              logo: "https://senatio.com/senatio_dark_logo.svg",
              description:
                "Senatio helps global companies build, operate, and scale engineering teams from India with managed execution, workflow improvement, and practical custom software.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://senatio.com/contact",
              },
            }),
          }}
        />
        {children}
      </body>
      <GoogleAnalytics gaId="G-DE366NRKT0" />
    </html>
  );
}
