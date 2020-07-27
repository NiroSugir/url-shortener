const express = require("express");
const redis = require("redis");
const morgan = require("morgan");
const { NODE_ENV, REDIS_HOST, REDIS_PORT, PORT } = require("./environment");

const client = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT });

const app = express();

app.use(morgan(NODE_ENV === "production" ? "tiny" : "dev"));

app.get("/", (_, res) => {
  res.send("hi");
});

app.use((err, req, res, next) => {
  // TODO: log the error to db
  console.error(err.stack);
  res.sendStatus(500);
});

app.use((req, res, next) => res.sendStatus(404));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
