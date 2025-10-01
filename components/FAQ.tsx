export default function FAQ(){
  return (
    <section id="faq" className="border-t border-line py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl font-bold">Common questions</h2>
        <div className="mt-4 space-y-3">
          {[
            ["How many stacks do I need?","Most homes use 10–20 kWh daily. Start with one 10 kWh stack and scale as needed. Commercial sites parallel multiple stacks to exceed 300 kWh."],
            ["Is it safe indoors?","LiFePO4 chemistry has excellent thermal stability. Install per local code with required clearances and ventilation."],
            ["Can I add solar later?","Yes. The hybrid inverter supports PV now or later and can operate as grid-charging backup only."],
            ["Will this work with a generator?","Yes. The ATS manages generator input and can auto-start supported models, charging batteries when solar is unavailable."]
          ].map(([q,a])=> (
            <details key={q} className="bg-card border border-line rounded-xl p-4">
              <summary className="font-semibold cursor-pointer">{q}</summary>
              <p className="text-muted mt-2">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

