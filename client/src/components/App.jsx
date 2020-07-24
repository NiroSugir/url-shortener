import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import UrlListingsPage from "../pages/UrlListingsPage";
import { useStyles } from "../theme";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Header />

      <Router>
        <main>
          <Route path="/" exact component={HomePage} />
          <Route path="/urls" exact component={UrlListingsPage} />
        </main>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
