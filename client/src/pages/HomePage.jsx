import React from "react";
import SlugCreator from "../components/SlugCreator";

const SHORTENER_HOME = process.env.REACT_APP_SHORTENER_HOME;

const HomePage = () => {
  const onSubmit = (data) => console.log("data", data);

  return <SlugCreator onSubmit={onSubmit} shortener_url={SHORTENER_HOME} />;
};

export default HomePage;
