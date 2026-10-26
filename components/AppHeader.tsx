import Link from "next/link";

export function AppHeader() {
  return (
    <header className="site-header">
      <div className="brand-wrap">
        <div className="brand-mark">LV</div>
        <div>
          <p className="brand-kicker">Liga veteranos</p>
          <h1 className="brand-name">Vallès</h1>
        </div>
      </div>

      <nav className="main-nav" aria-label="Navegación principal">
        <Link href="/">Inicio</Link>
        <Link href="/clasificacion">Clasificación</Link>
        <Link href="/calendario">Calendario</Link>
        <Link href="/equipos">Equipos</Link>
        <Link href="/admin">Admin</Link>
      </nav>
    </header>
  );
}
