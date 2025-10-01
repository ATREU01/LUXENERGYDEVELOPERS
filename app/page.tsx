"use client"
import Nav from "../components/Nav"
import StickySubnav from "../components/StickySubnav"
import HeroVideo from "../components/HeroVideo"
import FeatureGrid from "../components/FeatureGrid"
import ProductCards from "../components/ProductCards"
import CompareTable from "../components/CompareTable"
import HowItWorks from "../components/HowItWorks"
import FAQ from "../components/FAQ"
import Showcase from "../components/Showcase"
import Footer from "../components/Footer"
import { useState } from "react"

export default function Page(){
  const [status,setStatus] = useState<string>("")

  async function submit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = Object.fromEntries(fd.entries())
    const res = await fetch("/api/quote", { method:"POST", body: JSON.stringify(payload) })
    if(res.ok) setStatus("Thanks — we will reply within 1 business day.")
    else setStatus("Please check your details and try again.")
  }

  return (
    <main>
      <Nav/>
      <HeroVideo/>
      <StickySubnav/>
      <section id="storage-intro" className="section">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">Energy that feels invisible.</h2>
          <p className="text-muted max-w-2xl">Install once, forget it. Silent, safe, software-defined power.</p>
        </div>
      </section>
      <FeatureGrid/>
      <section id="storage" className="section divider">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Choose your build</h2>
        </div>
      </section>
      <ProductCards/>
      <CompareTable/>
      <HowItWorks/>
      <Showcase/>
      <section id="contact" className="section divider">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold">Tell us about your project</h2>
          <form onSubmit={submit} className="bg-card border border-line rounded-2xl p-5 grid md:grid-cols-2 gap-3">
            <label className="grid"><span>Full name</span><input name="name" required placeholder="Jane Smith" className="bg-transparent border border-line rounded-lg px-3 py-2"/></label>
            <label className="grid"><span>Email</span><input name="email" type="email" required placeholder="jane@domain.com" className="bg-transparent border border-line rounded-lg px-3 py-2"/></label>
            <label className="grid"><span>Phone</span><input name="phone" placeholder="(555) 123-4567" className="bg-transparent border border-line rounded-lg px-3 py-2"/></label>
            <label className="grid"><span>Site ZIP</span><input name="zip" inputMode="numeric" pattern="[0-9]{5}" placeholder="80202" className="bg-transparent border border-line rounded-lg px-3 py-2"/></label>
            <label className="grid md:col-span-2"><span>Project notes</span><textarea name="notes" rows={4} placeholder="Roof size, critical loads, panel size, generator, etc." className="bg-transparent border border-line rounded-lg px-3 py-2" /></label>
            <div className="md:col-span-2 flex items-center gap-3">
              <button className="px-4 py-2 rounded-full border border-accent shadow-lux" type="submit">Request Quote</button>
              <span className="text-muted" aria-live="polite">{status}</span>
            </div>
          </form>
        </div>
      </section>
      <Footer/>
    </main>
  )
}