import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";

export default function NotFoundPage() {
  return (
    <>
      <AppHeader />
      <main className="page-shell narrow-shell">
        <div className="panel empty-state">
          <h2>Página no encontrada</h2>
          <p>La ruta solicitada no existe en la aplicación.</p>
        </div>
      </main>
      <AppFooter />
    </>
  );
}
