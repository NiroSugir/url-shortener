import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UrlListingsPage from "../pages/UrlListingsPage";

const App = () => {
  return (
    <>
      <header>Url Shortener: Pocket-Size your address</header>

      <Router>
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/urls" exact component={UrlListingsPage} />
        </main>
      </Router>

      <footer>Copyright 2020 Niroshan Sugirtharatnam</footer>
    </>
  );
};

export default App;
