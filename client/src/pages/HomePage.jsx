import React from "react";
import SlugCreator from "../components/SlugCreator";

const HomePage = () => {
  const onSubmit = (data) => console.log("data", data);

  return <SlugCreator onSubmit={onSubmit} />;
};

export default HomePage;
