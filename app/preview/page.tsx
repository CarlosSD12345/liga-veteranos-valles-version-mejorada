import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { standings, fixtures, proposals } from "@/lib/data";
import { StandingsTable } from "@/components/StandingsTable";
import { FixturesList } from "@/components/FixturesList";
import { AdminPanel } from "@/components/AdminPanel";

export default function HomePagePreview() {
  return (
    <>
      <AppHeader />
      <main className="page-shell">
        <section className="content-grid">
          <div className="panel">
            <div className="panel-header">
              <h3>Clasificación</h3>
              <span>Actual</span>
            </div>
            <StandingsTable teams={standings} />
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Calendario</h3>
              <span>Próximas jornadas</span>
            </div>
            <FixturesList fixtures={fixtures} />
          </div>
        </section>

        <section className="panel admin-panel">
          <div className="panel-header">
            <h3>Propuestas</h3>
            <span>Revisión</span>
          </div>
          <AdminPanel proposals={proposals} />
        </section>
      </main>
      <AppFooter />
    </>
  );
}
