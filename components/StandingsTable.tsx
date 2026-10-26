import { Fixture, Proposal, Team } from "@/types";

export function StandingsTable({ teams }: { teams: Team[] }) {
  return (
    <div className="table-wrap">
      <table className="standings-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Equipo</th>
            <th>PJ</th>
            <th>GF</th>
            <th>GC</th>
            <th>Pts</th>
            <th>Forma</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={team.id}>
              <td>
                <span className="rank-pill">{index + 1}</span>
              </td>
              <td>
                <div className="team-name">
                  <span className="team-badge">{team.badge}</span>
                  <span>{team.name}</span>
                </div>
              </td>
              <td>{team.played}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td className="points">{team.points}</td>
              <td>
                <div className="form-row">
                  {team.form.map((result, idx) => (
                    <span
                      key={`${team.id}-${result}-${idx}`}
                      className={`form-pill ${
                        result === "W"
                          ? "form-win"
                          : result === "D"
                            ? "form-draw"
                            : "form-loss"
                      }`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
