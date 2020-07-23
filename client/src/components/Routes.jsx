import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SlugCreator from "./SlugCreator";
import HomePage from "./HomePage";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/urls" exact component={() => <div>Urls List</div>} />
    </Router>
  );
};
