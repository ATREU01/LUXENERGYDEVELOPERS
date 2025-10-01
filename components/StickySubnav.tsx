"use client"
import { useEffect, useState } from "react"

const items = [
  { href: "#overview", label: "Overview" },
  { href: "#storage", label: "Products" },
  { href: "#specs", label: "Specs" },
  { href: "#showcase", label: "Photos" },
  { href: "#contact", label: "Quote" }
]

export default function StickySubnav(){
  const [show, setShow] = useState(false)
  useEffect(()=> {
    const onScroll = () => setShow(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  },[])
  if(!show) return null
  return (
    <div className="sticky top-16 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="container h-12 flex items-center gap-6 overflow-x-auto">
        {items.map(i=> <a key={i.href} href={i.href} className="text-sm opacity-90 hover:opacity-100 whitespace-nowrap">{i.label}</a>)}
        <a href="#contact" className="ml-auto text-sm px-3 py-1.5 rounded-full border border-accent">Design My System</a>
      </div>
    </div>
  )
}