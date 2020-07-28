if (typeof process.env.PORT !== "string")
  throw new Error("Missing environment variable PORT");

if (typeof process.env.HOSTNAME !== "string")
  throw new Error("Missing environment variable HOSTNAME");

if (typeof process.env.REDIS_HOST !== "string")
  throw new Error("Missing environment variable REDIS_HOST");

if (typeof process.env.REDIS_PORT !== "string")
  throw new Error("Missing environment variable REDIS_PORT");

module.exports = {
  NODE_ENV:
    process.env.NODE_ENV === "production" ? "production" : "development",
  HOSTNAME: process.env.HOSTNAME,
  PORT: process.env.PORT,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
};
