const express = require("express");
const redis = require("redis");
const morgan = require("morgan");

const PORT = process.env.PORT;
if (typeof PORT === "undefined")
  throw new Error("Missing environment variable PORT");

const REDIS_HOST = process.env.REDIS_HOST;
if (typeof REDIS_HOST === "undefined")
  throw new Error("Missing environment variable REDIS_HOST");

const REDIS_PORT = process.env.REDIS_PORT;
if (typeof REDIS_PORT === "undefined")
  throw new Error("Missing environment variable REDIS_PORT");

const client = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT });

const app = express();

app.use(morgan(process.env.NODE_ENV === "production" ? "tiny" : "dev"));

app.get("/", (_, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
