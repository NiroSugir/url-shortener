const express = require("express");
const redis = require("redis");
const morgan = require("morgan");
const {
  NODE_ENV,
  REDIS_HOST,
  REDIS_PORT,
  HOSTNAME,
  PORT,
} = require("./environment");

const client = redis.createClient({ host: REDIS_HOST, port: REDIS_PORT });

const app = express();

app.use(morgan(NODE_ENV === "production" ? "tiny" : "dev"));

app.get("/", (_, res) => {
  res.send({
    message: `Redirection service. Go to ${HOSTNAME} to use the client. Copyright 2020 Niroshan Sugirtharatnam.`,
  });
});

app.post("/create", (req, res) => {
  const { slug, url } = req.body;

  // TODO: validate

  // TODO: create a slug if one wasn't provided

  // TODO: add to db

  res.sendStatus(200);
});

app.get("/:slug", (req, res) => {
  const { slug } = req.params;

  // TODO: validate

  // TODO: retrieve slug from database

  // TODO: add metric

  // redirect to url found for slug
  // TODO: replace placeholder url with the one found in the database
  res.redirect(307, HOSTNAME);
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
