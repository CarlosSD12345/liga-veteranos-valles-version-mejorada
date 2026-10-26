import { Proposal } from "@/types";

export function AdminPanel({ proposals }: { proposals: Proposal[] }) {
  return (
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
          <div>
            <span>Equipo: </span>
            <strong>{proposal.team}</strong>
          </div>
          <div>{proposal.date}</div>
        </article>
      ))}
    </div>
  );
}
