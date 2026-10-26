import { fixtures, standings, stats, proposals } from "@/lib/data";
import { StandingsTable } from "@/components/StandingsTable";
import { FixturesList } from "@/components/FixturesList";
import { AdminPanel } from "@/components/AdminPanel";

export default function Home() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Liga de Fútbol Veteranos del Vallès</p>
          <h1>Temporada 2026/27</h1>
        </div>
        <button className="primary-button">Panel Admin</button>
      </header>

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
            <h2>Clasificación</h2>
            <span>Jornada 3</span>
          </div>
          <StandingsTable teams={standings} />
        </div>

        <div className="panel">
          <div className="panel-header">
            <h2>Próximos partidos</h2>
            <span>Calendario</span>
          </div>
          <FixturesList fixtures={fixtures.slice(0, 6)} />
        </div>
      </section>

      <section className="panel admin-panel">
        <div className="panel-header">
          <h2>Gestión de propuestas</h2>
          <span>Revisión</span>
        </div>
        <AdminPanel proposals={proposals} />
      </section>
    </main>
  );
}
