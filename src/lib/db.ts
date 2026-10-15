import knex from "knex";
import config from "../knexfile";

const g = globalThis as any;
const env =
  process.env.NODE_ENV === "production" ? "production" : "development";

export default g.knex ||= knex(config[env]);
