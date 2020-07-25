import React from "react";
import SlugCreator from "../components/SlugCreator";
import { URL_SHORTENER_HOME } from "../env";

const HomePage = () => {
  const onSubmit = (data) => console.log("data", data);

  return <SlugCreator onSubmit={onSubmit} shortener_url={URL_SHORTENER_HOME} />;
};

export default HomePage;
