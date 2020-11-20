import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

import * as pages from "./pages";
import MainNavigation from "./components/main-navigation";
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
      <div style={{ flex: "1 0 auto" }}>
        <MainNavigation scrollWithOffset={scrollWithOffset} />
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
          <Route
            exact
            path="/about-us"
            render={(props) => (
              <pages.AboutUsPage {...props} {...(settings && { settings })} />
            )}
          />
          <Route
            exact
            path="/contact-us"
            render={(props) => (
              <pages.ContactUsPage {...props} {...(settings && { settings })} />
            )}
          />
          <Route
            exact
            path="/house-rules"
            render={(props) => (
              <pages.HouseRulesPage
                {...props}
                {...(settings && { settings })}
              />
            )}
          />
          <Route
            exact
            path="/terms-and-conditions"
            render={(props) => (
              <pages.TermsPage {...props} {...(settings && { settings })} />
            )}
          />
        </Switch>
      </div>
      <Route
        render={(props) => (
          <Footer
            {...props}
            scrollWithOffset={scrollWithOffset}
            {...(settings && { settings })}
          />
        )}
      />
    </BrowserRouter>
  );
}
