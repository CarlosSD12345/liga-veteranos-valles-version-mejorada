import Link from "next/link";
import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";
import { proposals } from "@/lib/data";

export default function AdminPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell narrow-shell">
        <section className="page-title-row">
          <div>
            <p className="eyebrow">Administración</p>
            <h2>Panel de propuestas</h2>
          </div>
          <Link href="/" className="secondary-button">
            Volver al inicio
          </Link>
        </section>

        <div className="panel admin-panel">
          <div className="panel-header">
            <h3>Gestión</h3>
            <button className="primary-button small-button">Nueva propuesta</button>
          </div>

          <div className="proposals-box">
            {proposals.map((proposal) => (
              <article key={proposal.id} className="proposal-item">
                <div className="proposal-top">
                  <strong>{proposal.title}</strong>
                  <span className={`badge ${proposal.status}`}>
                    {proposal.status === "pending"
                      ? "Pendiente"
                      : proposal.status === "approved"
                        ? "Aprobado"
                        : "Rechazado"}
                  </span>
                </div>

                <div className="proposal-meta">
                  <span>Equipo: {proposal.team}</span>
                  <span>{proposal.date}</span>
                </div>

                <div className="proposal-actions">
                  <button className="action-button accept">Aceptar</button>
                  <button className="action-button reject">Rechazar</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
