import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const Routes = () => {
  return (
    <Router>
      <Route path="/" exact component={() => <div>Home</div>} />
      <Route path="/urls" exact component={() => <div>Urls List</div>} />
    </Router>
  );
};
