import Link from "next/link";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { standings } from "@/lib/data";

export default function EquiposPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <section className="page-title-row">
          <div>
            <p className="eyebrow">Equipos</p>
            <h2>Participantes</h2>
          </div>
          <Link href="/" className="secondary-button">
            Volver al inicio
          </Link>
        </section>

        <section className="teams-grid">
          {standings.map((team) => (
            <article key={team.id} className="team-card">
              <div className="team-card-top">
                <span className="team-badge large-badge">{team.badge}</span>
                <div>
                  <h3>{team.name}</h3>
                  <small>{team.points} puntos</small>
                </div>
              </div>

              <div className="team-stat-grid">
                <div><span>PJ</span><strong>{team.played}</strong></div>
                <div><span>GF</span><strong>{team.goalsFor}</strong></div>
                <div><span>GC</span><strong>{team.goalsAgainst}</strong></div>
                <div><span>Form</span><strong>{team.form.join("-")}</strong></div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <AppFooter />
    </>
  );
}
