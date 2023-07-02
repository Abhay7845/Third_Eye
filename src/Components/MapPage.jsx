import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { coordinates } from "../Data/CountryCoordinates";
import { Select } from "antd";
import { City } from "country-state-city";

const MapPage = () => {
  const [location, setLocation] = useState("");
  const GetLocation = City.getCitiesOfCountry("IN");
  console.log("location==>", location);
  const center = [12.925683599374741, 77.58827189641126];

  return (
    <div className="mx-4">
      <div className="my-3">
        <Select
          placeholder="choose location"
          className="w-100"
          showSearch
          onChange={(value) => setLocation(value)}
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
      </MapContainer>
    </div>
  );
};

export default MapPage;
