import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "LUX Energy | Advanced Lithium Storage & Backup Power",
  description: "Powering the future with intelligence, storage, and light.",
  openGraph: {
    title: "LUX Energy â€” Advanced Lithium Storage",
    description: "Quiet, scalable power. From 5 kWh to megawatt-class.",
    url: "https://luxbuildingventures.com",
    siteName: "LUX Energy",
    images: [{ url: "/images/hero-battery.webp", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "LUX Energy â€” Advanced Lithium Storage",
    description: "Quiet, scalable power for homes and commercial sites.",
    images: ["/images/hero-battery.webp"]
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"Product",
            "name":"LuxStack 48V Battery",
            "brand":{"@type":"Brand","name":"LUX Energy"},
            "category":"EnergyStorage",
            "description":"Modular 48V LiFePO4 battery stack with advanced BMS.",
            "offers":{"@type":"AggregateOffer","priceCurrency":"USD","lowPrice":"2199","highPrice":"8999","availability":"https://schema.org/InStock"}
          })}}>
        </script>
        {children}
      </body>
    </html>
  )
}