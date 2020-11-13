import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

import * as pages from "./pages";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export default function App() {
  let settings = require("./data/settings.json");

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -55;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Navigation scrollWithOffset={scrollWithOffset} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <pages.HomePage {...props} {...(settings && { settings })} />
          )}
        />
        <Route
          exact
          path="/rab-island"
          render={(props) => (
            <pages.IslandRabPage {...props} {...(settings && { settings })} />
          )}
        />
      </Switch>
      <Footer
        scrollWithOffset={scrollWithOffset}
        {...(settings && { settings })}
      />
    </BrowserRouter>
  );
}
