import { Fixture, Proposal, Stat, Team } from "@/types";

export const stats: Stat[] = [
  { label: "Equipos", value: "17", meta: "Participantes" },
  { label: "Jornadas", value: "34", meta: "Totales" },
  { label: "Goleadores", value: "12", meta: "Top activos" },
  { label: "Media", value: "3,4", meta: "Goles por partido" },
];

export const standings: Team[] = [
  { id: 1, name: "Barberà", badge: "B", played: 3, wins: 3, draws: 0, losses: 0, goalsFor: 9, goalsAgainst: 2, points: 9, form: ["W", "W", "W"] },
  { id: 2, name: "Can Parellada", badge: "CP", played: 3, wins: 2, draws: 1, losses: 0, goalsFor: 8, goalsAgainst: 3, points: 7, form: ["W", "D", "W"] },
  { id: 3, name: "Castellar", badge: "C", played: 3, wins: 2, draws: 0, losses: 1, goalsFor: 7, goalsAgainst: 5, points: 6, form: ["W", "L", "W"] },
  { id: 4, name: "Santa Eulàlia", badge: "SE", played: 3, wins: 2, draws: 0, losses: 1, goalsFor: 6, goalsAgainst: 4, points: 6, form: ["W", "W", "L"] },
  { id: 5, name: "L'Ametlla", badge: "LA", played: 3, wins: 1, draws: 1, losses: 1, goalsFor: 5, goalsAgainst: 4, points: 4, form: ["D", "W", "L"] },
  { id: 6, name: "Sabadellenca", badge: "S", played: 3, wins: 1, draws: 1, losses: 1, goalsFor: 4, goalsAgainst: 5, points: 4, form: ["W", "L", "D"] },
  { id: 7, name: "Penya Decano", badge: "PD", played: 3, wins: 1, draws: 0, losses: 2, goalsFor: 5, goalsAgainst: 7, points: 3, form: ["L", "W", "L"] },
  { id: 8, name: "Ripollet", badge: "R", played: 3, wins: 0, draws: 1, losses: 2, goalsFor: 3, goalsAgainst: 8, points: 1, form: ["L", "D", "L"] },
];

export const fixtures: Fixture[] = [
  { id: 1, jornada: 7, local: "L'Ametlla", away: "Santa Eulàlia", score: "Pendiente", date: "04/10/2026", venue: "Municipal L'Ametlla" },
  { id: 2, jornada: 7, local: "Barberà", away: "Sabadellenca", score: "Pendiente", date: "04/10/2026", venue: "Municipal Barberà" },
  { id: 3, jornada: 7, local: "Castellar", away: "Can Parellada", score: "Pendiente", date: "04/10/2026", venue: "Municipal Castellar" },
  { id: 4, jornada: 8, local: "Penya Decano", away: "Ripollet", score: "Pendiente", date: "11/10/2026", venue: "La Ferreria" },
  { id: 5, jornada: 8, local: "Can Parellada", away: "Sabadellenca", score: "Pendiente", date: "11/10/2026", venue: "Can Parellada" },
  { id: 6, jornada: 8, local: "Santa Eulàlia", away: "Castellar", score: "Pendiente", date: "11/10/2026", venue: "Municipal Santa Eulàlia" },
];

export const proposals: Proposal[] = [
  { id: 1, title: "Propuesta de goleadores - Jornada 6", team: "A.V. L'Ametlla del Vallés", status: "approved", date: "2026-10-25" },
  { id: 2, title: "Propuesta de goleadores - Jornada 5", team: "Penya Decano", status: "approved", date: "2026-10-25" },
  { id: 3, title: "Resultado revisado - Santa Eulàlia vs Castellar", team: "Santa Eulàlia", status: "approved", date: "2026-10-25" },
  { id: 4, title: "Incidencia de tarjetas - Jornada 2", team: "L'Ametlla", status: "rejected", date: "2026-09-30" },
  { id: 5, title: "Propuesta de goleadores - Jornada 4", team: "C.F. Barberà", status: "pending", date: "2026-10-19" },
];
