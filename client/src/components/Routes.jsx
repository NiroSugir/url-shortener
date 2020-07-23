import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./HomePage";

export const Routes = () => (
  <Router>
    <Route path="/" exact component={HomePage} />
    <Route path="/urls" exact component={() => <div>Urls List</div>} />
  </Router>
);
