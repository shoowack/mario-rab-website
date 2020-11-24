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
    },
    scrollWithOffset
  } = props;

  return (
    <>
      {bookingFormSection && <section.BookingFormSection />}
      {rabSection || loparSection ? (
        <section.RabLoparSection
          rabSection={rabSection}
          loparSection={loparSection}
        />
      ) : null}
      {servicesSection && (
        <section.ServicesSection scrollWithOffset={scrollWithOffset} />
      )}
      {apartmentsSection && <section.ApartmentsSection />}
      {testimonialsSection && <section.TestimonialsSection />}
    </>
  );
}
