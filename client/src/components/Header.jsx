import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <header>
      <Typography component="h1" variant="h5">
        Url Shortener
      </Typography>
      <Typography variant="subtitle1" color={"textSecondary"} gutterBottom>
        Pocket-Size your address
      </Typography>
    </header>
  );
};

export default Header;
