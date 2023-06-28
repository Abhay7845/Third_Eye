import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { City } from "country-state-city";
import { Select } from "antd";

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

  const GelAllCities = City.getAllCities();
  console.log("GelAllCities==>", GelAllCities);

  return (
    <div>
      <div
        style={{
          width: "90%",
          margin: "auto",
        }}
        className="my-2"
      >
        <Select showSearch className="w-100" placeholder="Choose Your Location">
          {GelAllCities.map((item, i) => {
            return (
              <Select.Option key={i} value={item.name}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <div
        style={{
          height: "80vh",
          width: "90%",
          margin: "auto",
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDxfHQ1CQuqCCo-D48I2o9pdf96IqqyriI",
          }}
          center={YourLocation.center}
          zoom={13}
        />
      </div>
    </div>
  );
};

export default MapPage;
