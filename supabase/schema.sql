-- Supabase schema example
-- This file is a starting point for future database integration.

create table if not exists teams (
  id serial primary key,
  name text not null,
  short_name text,
  badge text,
  created_at timestamp default now()
);

create table if not exists fixtures (
  id serial primary key,
  jornada integer,
  local_team text not null,
  away_team text not null,
  score text default 'Pendiente',
  venue text,
  event_date date
);

create table if not exists proposals (
  id serial primary key,
  title text not null,
  team text not null,
  status text default 'pending',
  created_at timestamp default now()
);
