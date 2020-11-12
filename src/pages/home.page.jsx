import React from "react";
import RabSection from "./../components/homepage/rab.section";

export default function HomePage(props) {
  const {
    settings: {
      homePage: {
        visibileSections: { rabSection }
      }
    }
  } = props;

  return <>{rabSection && <RabSection />}</>;
}
