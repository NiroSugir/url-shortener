if (typeof process.env.REACT_APP_SHORTENER_HOME !== "string") {
  throw new Error(
    "Missing or invalid environment variable 'REACT_APP_SHORTENER_HOME.' " +
      "It must be a string."
  );
}

export const URL_SHORTENER_HOME = process.env.REACT_APP_SHORTENER_HOME;
