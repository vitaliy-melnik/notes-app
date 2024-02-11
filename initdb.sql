SELECT 'CREATE DATABASE notes_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'notes_db')\gexec

CREATE EXTENSION IF NOT EXISTS "uuid-ossp"\gexec

CREATE TABLE IF NOT EXISTS  notes (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  title VARCHAR (100) NOT NULL,
  description VARCHAR (100) NOT NULL,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW()
)\gexec