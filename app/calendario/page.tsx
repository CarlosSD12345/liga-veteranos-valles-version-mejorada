import Link from "next/link";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { fixtures } from "@/lib/data";

export default function CalendarioPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell narrow-shell">
        <section className="page-title-row">
          <div>
            <p className="eyebrow">Calendario</p>
            <h2>Jornadas y partidos</h2>
          </div>
          <Link href="/" className="secondary-button">
            Volver al inicio
          </Link>
        </section>

        <div className="calendar-list">
          {Array.from(new Set(fixtures.map((f) => f.jornada))).map((jornada) => {
            const jornadaMatches = fixtures.filter((f) => f.jornada === jornada);

            return (
              <div key={jornada} className="panel calendar-card">
                <div className="panel-header">
                  <h3>Jornada {jornada}</h3>
                  <span>{jornadaMatches[0]?.date ?? "Fecha por confirmar"}</span>
                </div>

                <div className="fixtures-list compact-list">
                  {jornadaMatches.map((fixture) => (
                    <article key={fixture.id} className="fixture-item compact-item">
                      <div className="fixture-team">
                        <strong>{fixture.local}</strong>
                        <span>vs</span>
                        <strong>{fixture.away}</strong>
                      </div>
                      <div className="fixture-meta">
                        <span>{fixture.venue}</span>
                        <strong>{fixture.score}</strong>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <AppFooter />
    </>
  );
}
