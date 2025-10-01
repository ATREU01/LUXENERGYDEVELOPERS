"use client"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero(){
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="uppercase text-muted tracking-[.2em] text-xs md:text-sm">Professional-grade energy</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] mt-3">
            Quiet power. Day and night.
            <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-accent2 to-accent">Scale from 5kWh to megawatt-class.</span>
          </h1>
          <p className="text-muted mt-5 max-w-xl">
            UL-certified LiFePOâ‚„ batteries, premium hybrid inverters, and UPS-class transfer. For homes, microgrids, and commercial backup.
          </p>
          <div className="flex gap-3 flex-wrap mt-7">
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-accent shadow-lux hover:shadow-glow transition-shadow">Design my system â†’</a>
            <a href="#how" className="px-5 py-2.5 rounded-full border border-line hover:border-accent/60">How it works</a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: .98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .8, ease: "easeOut" }}
          className="relative h-[420px] md:h-[520px] rounded-3xl border border-line shadow-lux overflow-hidden"
        >
          <Image src="/images/hero-battery.webp" alt="LUX battery hero" fill priority className="object-cover" />
          <motion.div
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear", delay: 1 }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/6 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  )
}