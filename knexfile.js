// this configuration is for migrations only
// and since jwt secret is not required, it's set to a placehodler string to bypass env validation
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "securekey";
}

const env = require("./server/env");

const isSQLite = env.DB_CLIENT === "sqlite3" || env.DB_CLIENT === "better-sqlite3";
const hasDatabaseUrl = !!process.env.DATABASE_URL;

module.exports = {
  client: env.DB_CLIENT,

  // Build the connection object based on client & env
  connection: isSQLite
    ? { filename: env.DB_FILENAME }
    : hasDatabaseUrl
      ? {
          // Prefer a single DATABASE_URL in production
          connectionString: process.env.DATABASE_URL,
          // IMPORTANT: accept provider's self-signed CA
          ssl: { rejectUnauthorized: false },
        }
      : {
          host: env.DB_HOST,
          database: env.DB_NAME,
          user: env.DB_USER,
          port: Number(env.DB_PORT) || 5432,
          password: env.DB_PASSWORD,
          // If DB_SSL is truthy, pass the right object (not just true)
          ...(env.DB_SSL ? { ssl: { rejectUnauthorized: false } } : {}),
        },

  // Only needed for SQLite
  useNullAsDefault: isSQLite,

  migrations: {
    tableName: "knex_migrations",
    directory: "server/migrations",
    disableMigrationsListValidation: true,
  },
};
