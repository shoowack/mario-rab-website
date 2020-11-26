import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import * as pages from "./pages";
import MainNavigation from "./components/main-navigation";
import Footer from "./components/footer";
import "./styles.scss";

export default function App() {
  let settings = require("./data/settings.json");

  const scrollWithOffset = (el, offset = -55) => {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.pageYOffset + offset,
      behavior: "smooth"
    });
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
              <pages.HomePage
                {...props}
                {...(settings && { settings })}
                scrollWithOffset={scrollWithOffset}
              />
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
            path="/apartment/:apartmentNumber"
            render={(props) => (
              <pages.ApartmentPage {...props} {...(settings && { settings })} />
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
