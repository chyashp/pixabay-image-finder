import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const NavBar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6">PixaBay Image Finder</Typography>
    </Toolbar>
  </AppBar>
);

export default NavBar;
