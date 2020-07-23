# A Simple URL Shortener

The app consists of a minimal frontend where you have the option to input a url (and optionally the slug). It will then add that to the database. Should a GET request come to that url, it will redirect the user to the saved url.

The app includes a simple table that lists all the urls that were added including some non-intrusive meta data.

## Requirements

- Create a Docker Container that wraps all the components as one and expose the frontend and api endpoint only

- A database that stores all the slugs, urls and meta data. Redis should be perfect for this.

- Frontend that's quick to load, but also mobile-friendly

  - use React for creating a SPA (with react-router)
  - use Material-UI for the design

- Use express for backend server. Shouldnt require more than 3 endpoints for the shortener. One more for listing all the shortened urls for a total of 4.
