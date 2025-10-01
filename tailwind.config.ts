import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "1.5rem" },
    extend: {
      colors: {
        bg:"#0b0f14", ink:"#e8eef9", muted:"#9fb1cb",
        line:"#16202c", card:"#0f151d", accent:"#8ecbff", accent2:"#9ef9d8"
      },
      borderRadius: { xl: "1rem", "2xl":"1.25rem", "3xl":"1.75rem" },
      boxShadow: {
        lux:"0 10px 30px rgba(0,0,0,.4), inset 0 1px 0 rgba(255,255,255,.02)",
        glow:"0 0 60px rgba(142,203,255,.25)"
      },
      backgroundImage: {
        "radial-fade":"radial-gradient(1200px 600px at 70% 10%, rgba(142,203,255,0.20), transparent 60%)"
      }
    }
  },
  plugins: []
} satisfies Config