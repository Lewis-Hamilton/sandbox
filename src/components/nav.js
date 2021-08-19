import React from "react";
import { Link, Route } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

export default function Nav() {
  return (
    <Route
      render={(history) => (
        <AppBar position="static">
          <Tabs value={history.location.pathname}>
            <Tab label="Home" value="/" component={Link} to="/"></Tab>
            <Tab
              label="Function"
              value="/function"
              component={Link}
              to="/function"
            ></Tab>
            <Tab
              label="Friday"
              value="/friday"
              component={Link}
              to="/friday"
            ></Tab>
            <Tab
              label="Input"
              value="/input"
              component={Link}
              to="/input"
            ></Tab>
            <Tab
              label="Object"
              value="/object"
              component={Link}
              to="/object"
            ></Tab>
            <Tab
              label="Score"
              value="/score"
              component={Link}
              to="/score"
            ></Tab>
            <Tab
              label="Color"
              value="/color"
              component={Link}
              to="/color"
            ></Tab>
            <Tab
              label="Array"
              value="/array"
              component={Link}
              to="/array"
            ></Tab>
          </Tabs>
        </AppBar>
      )}
    />
  );
}
