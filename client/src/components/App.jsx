import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/urls" exact component={() => <div>Urls List</div>} />
    </Router>
  );
};

export default App;
