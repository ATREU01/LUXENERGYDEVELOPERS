import Image from "next/image"
import { products } from "../lib/products"

export default function ProductCards(){
  return (
    <section id="storage" className="section divider">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Choose your build.</h2>
          <p className="text-muted max-w-2xl">Mix-and-match batteries, inverters, and accessories.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(p => (
            <article key={p.slug} className="bg-card/80 border border-line rounded-2xl p-4 shadow-lux hover:shadow-glow transition-shadow hover:-translate-y-0.5 duration-300 flex flex-col">
              <div className="relative h-64 rounded-xl overflow-hidden border border-line">
                <Image src={p.imageUrl} alt={p.name} fill className="object-contain" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{p.name}</h3>
              <p className="text-muted">{p.summary}</p>
              <div className="flex gap-2 flex-wrap my-2">
                {p.tags.map(t => <span key={t} className="text-xs border border-line rounded-full px-2 py-1">{t}</span>)}
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-muted">From </span>
                <a href="#contact" className="px-3 py-1.5 rounded-full border border-accent shadow-lux hover:shadow-glow transition-shadow">Quote</a>
              </div>
            </article>
          ))}
        </div>
        <p className="text-muted text-sm mt-2">Pricing for illustration only. White-label your preferred SKUs here.</p>
      </div>
    </section>
  )
}

