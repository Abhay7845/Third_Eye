import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Select } from "antd";
import { City } from "country-state-city";
// import { BsFillFlagFill } from "react-icons/bs";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const MapPage = () => {
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const GelAllCities = City.getAllCities();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }, [latitude, longitude]);

  const center = {
    lat: latitude,
    lng: longitude,
  };

  const markers = [{ lat: latitude, lng: longitude }];
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
        <LoadScript googleMapsApiKey="AIzaSyDxfHQ1CQuqCCo-D48I2o9pdf96IqqyriI">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
          >
            {markers.map((marker, i) => {
              return (
                <Marker key={i} position={marker}>
                  Hello
                </Marker>
              );
            })}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default MapPage;
