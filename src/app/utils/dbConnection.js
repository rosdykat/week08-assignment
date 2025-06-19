// TODO: Set up your database pool and connection string

import pg from "pg";

export const db = new pg.Pool({
  connectionString: process.env.NEXT_DATABASE_URL,
});
