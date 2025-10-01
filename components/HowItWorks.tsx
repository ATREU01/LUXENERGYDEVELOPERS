function Step({n,title,desc}:{n:number;title:string;desc:string}){
  return (
    <article className="bg-card border border-line rounded-2xl p-5 shadow-lux">
      <h3 className="font-semibold">{n}. {title}</h3>
      <p className="text-muted">{desc}</p>
    </article>
  )
}
export default function HowItWorks(){
  return (
    <section id="how" className="border-t border-line py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold">From sunlight to sockets, automatically.</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <Step n={1} title="Capture" desc="PV feeds the hybrid inverter; excess charges LiFePO4 stacks via CAN-controlled BMS."/>
          <Step n={2} title="Optimize" desc="Time-of-use aware logic prioritizes cheapest energy and peak-shaves large loads."/>
          <Step n={3} title="Backup" desc="Grid outage? Sub-10ms transfer keeps critical loads up with zero flicker."/>
        </div>
        <div className="mt-4 bg-gradient-to-br from-sky-500/10 to-emerald-400/10 border border-line rounded-2xl p-6">
          <h3 className="font-semibold">Need engineered drawings?</h3>
          <p className="text-muted">We provide single-line diagrams, load calcs, and commissioning checklists for AHJ/utility approval.</p>
        </div>
      </div>
    </section>
  )
}

