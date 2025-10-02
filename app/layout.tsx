import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "LUX ENERGY DEVELOPERS | Advanced Lithium Storage & Backup Power",
  description: "LUX ENERGY DEVELOPERS delivers modular LiFePO4 storage, hybrid inverters, engineered backup, and pro-grade installs.",
  alternates: { canonical: "https://luxbuildingventures.com" },
  openGraph: {
    title: "LUX ENERGY DEVELOPERS — Advanced Lithium Storage",
    description: "Quiet, scalable power — from 5 kWh to megawatt-class.",
    url: "https://luxbuildingventures.com",
    siteName: "LUX ENERGY DEVELOPERS",
    images: [{ url: "/video/datacenter-poster.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LUX ENERGY DEVELOPERS — Advanced Lithium Storage",
    description: "Quiet, scalable power for homes, microgrids, and commercial sites.",
    images: ["/video/datacenter-poster.jpg"]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "LUX ENERGY DEVELOPERS",
              "url": "https://luxbuildingventures.com",
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