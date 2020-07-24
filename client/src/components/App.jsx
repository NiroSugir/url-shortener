import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "../pages/HomePage";
import UrlListingsPage from "../pages/UrlListingsPage";
import { useStyles } from "../theme";

const App = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
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
    </Container>
  );
};

export default App;
