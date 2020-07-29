import React from "react";
import SlugCreator from "../components/SlugCreator";
import { URL_SHORTENER_HOME } from "../env";

const HomePage = () => {
  const onSubmit = async (data) => {
    try {
      let response = await fetch(`${URL_SHORTENER_HOME}/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          url: data.url,
          slug: data.slug,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      console.log("response", await response.json());
    } catch (e) {
      console.error.call(console, e);
    }
  };

  return <SlugCreator onSubmit={onSubmit} shortener_url={URL_SHORTENER_HOME} />;
};

export default HomePage;
