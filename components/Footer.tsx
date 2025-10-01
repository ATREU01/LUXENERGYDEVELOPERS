export default function Footer(){
  return (
    <footer className="section">
      <div className="container text-muted">
        <div>LUX Energy Developers — © {new Date().getFullYear()}</div>
        <div className="text-sm">info@luxbuildingventures.com</div>
      </div>
    </footer>
  )
}