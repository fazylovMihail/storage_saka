module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: "127.0.0.1",
      port: 5432,
      user: "your_database_user",
      password: "your_database_password",
      database: "your_database_name",
    },
    pool: { min: 2, max: 10 },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: { min: 2, max: 10 },
  },
};
