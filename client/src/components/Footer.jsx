import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

const Footer = () => {
  return (
    <Box mt={8}>
      <Typography variant="body2" color="textSecondary" align="center">
        Copyright © {new Date().getFullYear() + " "}
        <Link color="inherit" href="https://www.nirosugir.com">
          Niroshan Sugirtharatnam
        </Link>
        . All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
