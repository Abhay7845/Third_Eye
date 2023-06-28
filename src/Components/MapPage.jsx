import React from "react";
import GoogleMapReact from "google-map-react";

const MapPage = () => {
  const defaultProps = {
    center: {
      lat: 12.971599,
      lng: 77.594566,
    },
  };

  return (
    <div
      style={{ height: "70vh", width: "50%", margin: "auto", marginTop: "4%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxfHQ1CQuqCCo-D48I2o9pdf96IqqyriI" }}
        defaultCenter={defaultProps.center}
        defaultZoom={11}
      />
    </div>
  );
};

export default MapPage;
