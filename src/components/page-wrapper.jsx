import React from "react";
import GoogleMapReact from "google-map-react";
import "./page-wrapper.scss";

export default function PageWrapper({ children, headerImage }) {
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
    <div id="core" className="page-property-details">
      <div
        className="page-header"
        style={{ background: `url(${headerImage})` }}
      >
        <div className="container">
          <div className="page-header-inner"></div>
        </div>
      </div>
      <div className="main-wrapper-container">
        <div className="container">
          <div id="main-wrapper">
            <div className="island">
              <div style={{ height: "200px", width: "100%" }}>
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
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
