import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";

import Navigation from "./components/navigation";
// import Footer from "./Components/Footer";

function App() {
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
            <h1>Homepage</h1>
            // <HomePage {...props} {...(settings && { settings })} />
          )}
        />
      </Switch>
      {/* <Footer
        scrollWithOffset={scrollWithOffset}
        {...(settings && { settings })}
      /> */}
    </BrowserRouter>
  );
}

export default App;
