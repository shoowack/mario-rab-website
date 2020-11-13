import React from "react";
import * as section from "./../components/homepage/";

export default function HomePage(props) {
  const {
    settings: {
      homePage: {
        visibileSections: {
          bookingFormSection,
          rabSection,
          loparSection,
          servicesSection,
          apartmentsSection,
          testimonialsSection
        }
      }
    }
  } = props;

  return (
    <>
      {bookingFormSection && <section.BookingFormSection />}
      {rabSection && <section.RabSection />}
      {loparSection && <section.LoparSection />}
      {servicesSection && <section.ServicesSection />}
      {apartmentsSection && <section.ApartmentsSection />}
      {testimonialsSection && <section.TestimonialsSection />}
    </>
  );
}
