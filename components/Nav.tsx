"use client"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Nav(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur transition-colors ${scrolled ? "bg-bg/75 border-b border-line" : "bg-transparent"}`}>
      <div className="container h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <Image src="/logos/lux-energy-logo.svg" alt="LUX Energy Developers" width={160} height={36} priority />
        </a>
        <nav className="hidden md:flex gap-7 items-center">
          <a href="#storage" className="opacity-90 hover:opacity-100">Storage</a>
          <a href="#specs" className="opacity-90 hover:opacity-100">Specs</a>
          <a href="#showcase" className="opacity-90 hover:opacity-100">Showcase</a>
          <a href="#contact" className="px-4 py-2 rounded-full border border-accent shadow-lux hover:shadow-glow transition-shadow">Get a Quote</a>
        </nav>
      </div>
    </header>
  )
}