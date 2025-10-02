import Image from "next/image"

export default function Footer(){
  return (
    <footer className="section border-t border-line">
      <div className="container">
        {/* Top: CTA strip */}
        <div className="bg-card/60 border border-line rounded-2xl p-5 shadow-lux flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold">Ready to design your system?</h3>
            <p className="text-muted text-sm">Quiet backup. Smart storage. Pro install.</p>
          </div>
          <div className="flex gap-3">
            <a href="#contact" className="px-4 py-2 rounded-full border border-accent shadow-lux">Request a Quote</a>
            <a href="mailto:sales@luxsupercap.com" className="px-4 py-2 rounded-full border border-line">sales@luxsupercap.com</a>
          </div>
        </div>

        {/* Main: columns */}
        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Image src="/logos/lux-energy-logo.svg" alt="LUX Energy Developers" width={140} height={32} />
            </div>
            <p className="text-muted text-sm">Advanced lithium storage, hybrid inverters, and engineered backup for residential and commercial sites.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Explore</h4>
            <ul className="space-y-1 text-sm text-muted">
              <li><a className="hover:text-accent" href="#overview">Overview</a></li>
              <li><a className="hover:text-accent" href="#storage">Products</a></li>
              <li><a className="hover:text-accent" href="#specs">Specs</a></li>
              <li><a className="hover:text-accent" href="#showcase">Photos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-sm text-muted">
              <li><a className="hover:text-accent" href="#faq">FAQ</a></li>
              <li><a className="hover:text-accent" href="mailto:sales@luxsupercap.com">Email sales</a></li>
              <li><a className="hover:text-accent" href="#contact">Request a quote</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="space-y-1 text-sm text-muted">
              <li><a className="hover:text-accent" href="mailto:sales@luxsupercap.com">sales@luxsupercap.com</a></li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-muted text-sm mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span>© {new Date().getFullYear()} LUX Energy Developers. All rights reserved.</span>
          <div className="flex gap-4">
            <a className="hover:text-accent" href="/privacy">Privacy</a>
            <a className="hover:text-accent" href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}