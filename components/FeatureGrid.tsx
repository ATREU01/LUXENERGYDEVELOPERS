function Card({title, value, children}:{title:string, value:string, children:string}){
  return (
    <article className="bg-card border border-line rounded-2xl p-5 shadow-lux">
      <div className="text-sm text-muted">{title}</div>
      <div className="text-3xl md:text-4xl font-extrabold mt-1">{value}</div>
      <p className="text-muted mt-1.5">{children}</p>
    </article>
  )
}
export default function FeatureGrid(){
  return (
    <section id="specs" className="section divider">
      <div className="container">
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Peak performance. Minimal footprint.</h2>
          <p className="text-muted max-w-2xl">LiFePO4 safety and endurance with grid-tied efficiency and off-grid resilience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
          <Card title="Usable Capacity" value="5-30 kWh">Parallel stacks for &gt;300 kWh commercial.</Card>
          <Card title="Round-Trip" value=">= 96%">High-efficiency power electronics.</Card>
          <Card title="Cycle Life" value=">= 6000">At 80% DoD typical duty cycles.</Card>
          <Card title="Output" value="3-12 kW">Split-phase 120/240V.</Card>
          <Card title="Protection" value="UL-listed">Advanced per-cell BMS.</Card>
          <Card title="Integrations" value="PV / Gen / Grid">Works with common inverters.</Card>
        </div>
      </div>
    </section>
  )
}