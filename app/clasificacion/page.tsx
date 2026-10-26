import Link from "next/link";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { standings } from "@/lib/data";
import { StandingsTable } from "@/components/StandingsTable";

export default function ClasificacionPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell narrow-shell">
        <section className="page-title-row">
          <div>
            <p className="eyebrow">Competición</p>
            <h2>Clasificación general</h2>
          </div>
          <Link href="/" className="secondary-button">
            Volver al inicio
          </Link>
        </section>

        <div className="panel">
          <StandingsTable teams={standings} />
        </div>
      </main>
      <AppFooter />
    </>
  );
}
