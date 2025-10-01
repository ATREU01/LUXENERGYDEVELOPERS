export type Product = { slug: string; name: string; summary: string; price: number; tags: string[]; imageUrl: string }
export const products: Product[] = [
  { slug: "stack-battery-48v", name: "LuxStack 48V Battery", summary: "5–30 kWh per stack • Smart BMS • CAN/RS485", price: 219900, tags: ["LFP","Rack/Floor","IP65"], imageUrl: "/images/stack-battery.webp" },
  { slug: "hybrid-inverter", name: "LuxHybrid Inverter", summary: "6–12 kW • 120/240V split phase • ATS built-in", price: 179900, tags: ["96% eff","PV + Gen","Wi-Fi"], imageUrl: "/images/hybrid-inverter.webp" },
  { slug: "gateway-backup", name: "LuxGateway & Backup", summary: "Whole-home backup • Rapid shutdown • Load shedding", price: 94900, tags: ["UL 1741","Auto transfer","App"], imageUrl: "/images/bms-gateway.webp" }
]

