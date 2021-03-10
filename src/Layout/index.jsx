import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LayoutStyled from "./styles";
// components and pages
import Home from "../pages/Home";
import Header from "../components/Header";

function Layout() {
  return (
    <LayoutStyled>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </LayoutStyled>
  );
}

export default Layout;
