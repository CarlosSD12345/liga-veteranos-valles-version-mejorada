import Link from "next/link";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { standings, stats, fixtures, proposals } from "@/lib/data";
import { StandingsTable } from "@/components/StandingsTable";
import { FixturesList } from "@/components/FixturesList";
import { AdminPanel } from "@/components/AdminPanel";

export default function HomePage() {
  return (
    <>
      <AppHeader />

      <main className="page-shell">
        <section className="hero-panel">
          <div>
            <p className="eyebrow">Temporada 2026/27</p>
            <h2>La liga en directo</h2>
          </div>
          <Link href="/clasificacion" className="primary-button">
            Ver clasificación
          </Link>
        </section>

        <section className="stats-grid">
          {stats.map((stat) => (
            <article key={stat.label} className="stat-card">
              <span className="stat-label">{stat.label}</span>
              <strong className="stat-value">{stat.value}</strong>
              <span className="stat-meta">{stat.meta}</span>
            </article>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Clasificación</h3>
              <span>Jornada 3</span>
            </div>
            <StandingsTable teams={standings} />
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Próximos partidos</h3>
              <span>Calendario</span>
            </div>
            <FixturesList fixtures={fixtures.slice(0, 4)} />
          </div>
        </section>

        <section className="panel admin-panel">
          <div className="panel-header">
            <h3>Propuestas recientes</h3>
            <Link href="/admin" className="link-button">
              Ir al panel
            </Link>
          </div>
          <AdminPanel proposals={proposals} />
        </section>
      </main>

      <AppFooter />
    </>
  );
}
