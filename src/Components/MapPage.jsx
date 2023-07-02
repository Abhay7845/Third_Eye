import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { coordinates } from "../Data/CountryCoordinates";

const MapPage = () => {
  const center = [23.921775384134516, 78.15758691262324];

  return (
    <MapContainer
      center={center}
      zoom={3}
      style={{ width: "100%", height: "90vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yWf5XdnBxBRhEaDUGS2n"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <Polygon
        positions={coordinates}
        pathOptions={{
          fillColor: "transparent",
          fillOpacity: 0.7,
          weight: 2,
          opacity: 1,
          dashArray: 3,
          color: "red",
        }}
        // eventHandlers={{
        //   mouseover: (e) => {
        //     const layer = e.target;
        //     layer.setStyle({
        //       dashArray: "",
        //       fillOpacity: 0.7,
        //       weight: 2,
        //       opacity: 1,
        //       color: "red",
        //     });
        //   },
        //   mouseout: (e) => {
        //     const layer = e.target;
        //     layer.setStyle({
        //       fillOpacity: 0.7,
        //       weight: 2,
        //       dashArray: "3",
        //       color: "red",
        //     });
        //   },
        // }}
      />
    </MapContainer>
  );
};

export default MapPage;
