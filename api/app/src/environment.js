if (typeof process.env.PORT !== "string")
  throw new Error("Missing environment variable PORT");

if (typeof process.env.REDIS_HOST !== "string")
  throw new Error("Missing environment variable REDIS_HOST");

if (typeof process.env.REDIS_PORT !== "string")
  throw new Error("Missing environment variable REDIS_PORT");

module.exports = {
  PORT: process.env.PORT,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
};
