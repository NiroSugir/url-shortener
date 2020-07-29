const express = require("express");
const bodyParser = require("body-parser");
const Redis = require("ioredis");
const morgan = require("morgan");
const createSlug = require("./lib/createSlug");
const {
  NODE_ENV,
  REDIS_HOST,
  REDIS_PORT,
  HOSTNAME,
  PORT,
} = require("./environment");

const client = new Redis(REDIS_PORT, REDIS_HOST);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan(NODE_ENV === "production" ? "tiny" : "dev"));

const InvalidSlug = /[^a-z0-9_-]/i;

app.get("/", (_, res) => {
  res.send({
    message: `Redirection service. Go to ${HOSTNAME} to use the client. Copyright 2020 Niroshan Sugirtharatnam.`,
  });
});

app.post("/create", async (req, res) => {
  const { slug, url } = req.body;

  // validate

  // throw an error if it's an invalid url string
  try {
    new URL(url);
  } catch (e) {
    return res.send({ error: "Invalid url.", success: false });
  }

  // create a slug if one wasn't provided
  if (typeof slug === "string" && slug.length > 0) {
    if (slug.length > 12) {
      return res.send({
        error: "Custom path is too long. May not be over 12 characters long.",
        success: false,
      });
    }

    if (InvalidSlug.test(slug)) {
      return res.send({
        error:
          "Invalid custom path. May contain only letters, numbers, dash (-) and underscore (_).",
        success: false,
      });
    }
  } else {
    // create slug
    slug = createSlug(Math.ceil(Math.random() % 12));
  }

  // make sure the slug is unique (the url doesn't have to be however)
  const slugExists = await client.get(`slug:${slug}`);
  if (slugExists !== null) {
    return res.send({
      error: "Custom path already exists. Please choose another.",
      success: false,
    });
  }

  // add to db
  await client.set(`slug:${slug}`, url);

  // substitute the placeholder with the real redirect address
  res.send({
    redirectUrl: `${HOSTNAME}/${slug}`,
    success: true,
  });
});

app.get("/:slug", (req, res) => {
  const { slug } = req.params;

  // validate
  if (typeof slug !== "string" || slug.length < 1) {
    return res.sendStatus(404);
  }

  // retrieve slug from database
  const url = await client.get(`slug:${slug}`)
  if (url === null) {
    return res.sendStatus(404)
  }

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
