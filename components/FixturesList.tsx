import { Fixture } from "@/types";

export function FixturesList({ fixtures }: { fixtures: Fixture[] }) {
  return (
    <div className="fixtures-list">
      {fixtures.map((fixture) => (
        <article key={fixture.id} className="fixture-item">
          <div className="fixture-team">
            <strong>{fixture.local}</strong>
            <span className="fixture-score">vs</span>
            <strong>{fixture.away}</strong>
          </div>

          <div>
            <div className="fixture-result">{fixture.score}</div>
            <div className="fixture-date">{fixture.date}</div>
          </div>
        </article>
      ))}
    </div>
  );
}
