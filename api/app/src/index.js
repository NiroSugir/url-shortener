const express = require("express");
const redis = require("redis");
const morgan = require("morgan");
const { REDIS_HOST, REDIS_PORT, PORT } = require("./environment");

const client = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT });

const app = express();

app.use(morgan(process.env.NODE_ENV === "production" ? "tiny" : "dev"));

app.get("/", (_, res) => {
  res.send("hi");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
