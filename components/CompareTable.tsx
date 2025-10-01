export default function CompareTable(){
  return (
    <section className="border-t border-line py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold">Why LUX beats lead-acid and loud generators.</h2>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-[720px] border-separate border-spacing-y-2">
            <thead>
              <tr className="text-muted">
                <th className="text-left p-2">Feature</th>
                <th className="text-left p-2">LUX LFP</th>
                <th className="text-left p-2">Lead-acid</th>
                <th className="text-left p-2">Gas generator</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Round-trip efficiency","High (= 96%)","70–85%","N/A"],
                ["Noise","Silent","Silent","80–90 dB"],
                ["Maintenance","Minimal","Frequent","High"],
                ["Emissions","Zero onsite","Zero onsite","CO2/NO?"],
                ["Lifetime cycles","= 6,000","~500–1,000","N/A"]
              ].map((r,i)=> (
                <tr key={i}>{r.map((c,j)=> <td key={j} className="bg-card border border-line px-3 py-2 rounded-xl">{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

