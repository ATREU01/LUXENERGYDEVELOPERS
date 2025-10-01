import Image from "next/image"

const shots = [
  { src: "/photos/install-1.webp", alt: "Install A" },
  { src: "/photos/install-2.webp", alt: "Install B" },
  { src: "/photos/panel-room.webp", alt: "Panel room" },
  { src: "/photos/rack-battery.webp", alt: "Rack battery" }
]

export default function Showcase(){
  return (
    <section id="showcase" className="section divider">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Showcase</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shots.map(s=> (
            <a key={s.src} href={s.src} target="_blank" className="group">
              <div className="relative h-48 rounded-2xl overflow-hidden border border-line shadow-lux">
                <Image src={s.src} alt={s.alt} fill className="object-cover group-hover:scale-[1.02] transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}