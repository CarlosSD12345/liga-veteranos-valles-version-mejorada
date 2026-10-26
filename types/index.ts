export type Team = {
  id: number;
  name: string;
  badge: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
  form: Array<"W" | "D" | "L">;
};

export type Fixture = {
  id: number;
  jornada: number;
  local: string;
  away: string;
  score: string;
  date: string;
  venue: string;
};

export type Proposal = {
  id: number;
  title: string;
  team: string;
  status: "pending" | "approved" | "rejected";
  date: string;
};

export type Stat = {
  label: string;
  value: string;
  meta: string;
};
