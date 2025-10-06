"use client"
import { useEffect, useState } from "react"

export default function HeroVideo(){
  const [kwh, setKwh] = useState(5)
  useEffect(()=>{
    const id = setInterval(()=>{
      setKwh(v => (v >= 300 ? 5 : v + 5))
    }, 1200)
    return () => clearInterval(id)
  },[])
  return (
    <section id="overview" className="hero-video-wrap" style={{height: "72vh"}}>
      <video autoPlay muted loop playsInline poster="/video/datacenter-poster.jpg">
        <source src="/video/datacenter.webm" type="video/webm" />
        <source src="/video/datacenter.mp4" type="video/mp4" />
      </video>
      <div className="hero-video-overlay" />
      <div className="container relative z-10 h-full flex items-center">
        <div>
          <p className="uppercase text-muted tracking-[.2em] text-xs">LUX ENERGY DEVELOPERS</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.05] mt-2">
            Scalable power for modern sites.
          </h1>
          <p className="text-muted mt-4 max-w-2xl">
            Modular LiFePO4 storage, hybrid inverters, and engineered backup. 
          </p>
          <div className="mt-6 flex gap-3 flex-wrap">
            <a href="#contact" className="px-5 py-2.5 rounded-full border border-accent shadow-lux">Design My System</a>
            <a href="#showcase" className="px-5 py-2.5 rounded-full border border-line">See Installs</a>
          </div>
          <div className="mt-8 flex gap-8 text-sm text-muted">
            <div>Capacity live: <span className="text-ink font-bold">{kwh}-kWh</span> (demo)</div>
            <div>Round-trip: <span className="text-ink font-bold">&gt;= 96%</span></div>
            <div>Cycle life: <span className="text-ink font-bold">&gt;= 6000</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
