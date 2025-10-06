import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  // ✅ your canonical domain
  metadataBase: new URL("https://www.luxenergydevelopers.com"),
  title: "LUX Energy Developers | Advanced Energy Storage & Solar",
  description:
    "Advanced energy storage and solar by LUX Energy Developers. LiFePO₄ battery systems, hybrid inverters, and engineered backup for residential, commercial, and data-center grade projects.",
  alternates: { canonical: "https://www.luxenergydevelopers.com" },
  keywords: [
    "energy storage",
    "solar",
    "lithium battery",
    "LiFePO4",
    "backup power",
    "hybrid inverter",
    "home battery",
    "commercial battery",
    "solar battery",
    "whole home backup"
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "LUX Energy Developers — Advanced Energy Storage & Solar",
    description:
      "LiFePO₄ storage, hybrid inverters, and engineered backup. From 5 kWh to megawatt-class.",
    url: "/",
    siteName: "LUX Energy Developers",
    images: [{ url: "/social/og.jpg", width: 1200, height: 630, alt: "LUX Energy Developers" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LUX Energy Developers — Advanced Energy Storage & Solar",
    description:
      "Advanced LiFePO₄ storage and solar systems. Residential, commercial, and data-center grade.",
    images: ["/social/og.jpg"]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Organization schema with your email */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LUX Energy Developers",
              "url": "https://www.luxenergydevelopers.com",
              "logo": "/logos/lux-energy-logo.svg",
              "contactPoint": [{
                "@type": "ContactPoint",
                "contactType": "sales",
                "email": "sales@luxsupercap.com"
              }]
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}
