import React from "react";
import GoogleMapReact from "google-map-react";

export default function Map(props) {
  const loc = {
    center: {
      lat: 44.828537,
      lng: 14.748109
    },
    marker: {
      lat: 44.828537,
      lng: 14.748109
    },
    zoom: 11
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  let mapOptions = {
    scrollwheel: false,
    mapTypeControlOptions: {
      position: "BOTTOM_RIGHT"
    },
    draggable: false,
    rotateControl: false,
    scaleControl: false,
    streetViewControl: false,
    panControl: false,
    zoomControlOptions: false
  };

  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
      defaultCenter={loc.center}
      defaultZoom={loc.zoom}
      options={mapOptions}
    >
      <AnyReactComponent
        lat={loc.marker.lat}
        lng={loc.marker.lng}
        text="My Marker"
      ></AnyReactComponent>
    </GoogleMapReact>
  );
}
