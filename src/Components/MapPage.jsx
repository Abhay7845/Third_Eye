import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { coordinates } from "../Data/CountryCoordinates";
import { Select } from "antd";
import L from "leaflet";
import { City } from "country-state-city";

const MapPage = () => {
  const [value, setValue] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const GetLocation = City.getCitiesOfCountry("IN");
  const location = GetLocation.filter((data) => data.name === value);

  useEffect(() => {
    location.map((position) => {
      setLatitude(position.latitude);
      setLongitude(position.longitude);
      return value;
    });
  }, [latitude, longitude, location, value]);

  const center = [
    !latitude ? 12.925683599374741 : latitude,
    !longitude ? 77.58827189641126 : longitude,
  ];

  const markerIcon = new L.Icon({
    iconUrl: require("../Img/Location.png"),
    iconSize: [40, 40],
    iconAnchor: [17, 46],
    popupAnchor: [0, -46],
  });

  return (
    <div className="mx-4">
      <div className="my-3">
        <Select
          placeholder="choose location"
          className="w-100"
          showSearch
          onChange={(value) => setValue(value)}
        >
          {GetLocation.map((item, i) => {
            return (
              <Select.Option key={i} value={item.name}>
                {item.name}
              </Select.Option>
            );
          })}
        </Select>
      </div>
      <MapContainer
        center={center}
        zoom={9}
        style={{ width: "100%", height: "90vh" }}
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yWf5XdnBxBRhEaDUGS2n"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Polygon
          positions={coordinates}
          pathOptions={{
            fillColor: "#ADD8E6",
            fillOpacity: 0.5,
            weight: 1,
            dashArray: 3,
            color: "red",
          }}
        />
        <Marker icon={markerIcon} position={center}>
          {location.map((item, i) => {
            return (
              <Popup key={i}>
                <b>City Name- {item.name}</b>
                <br />
                <b>Country Code- {item.countryCode}</b>
                <br />
                <b>State Code- {item.stateCode}</b>
              </Popup>
            );
          })}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapPage;
