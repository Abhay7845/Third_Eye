import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
// import { Marker } from "google-maps-react";
const MapPage = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  const YourLocation = {
    center: {
      lat: latitude,
      lng: longitude,
    },
  };

  console.log("YourLocation==>", YourLocation);

  return (
    <div
      style={{ height: "70vh", width: "50%", margin: "auto", marginTop: "4%" }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxfHQ1CQuqCCo-D48I2o9pdf96IqqyriI" }}
        center={YourLocation.center}
        zoom={11}
      />
    </div>
  );
};

export default MapPage;
