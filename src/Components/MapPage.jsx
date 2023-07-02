import React from "react";
import { MapContainer, TileLayer, Polygon } from "react-leaflet";
import { coordinates } from "../Data/CountryCoordinates";

const MapPage = () => {
  const center = [12.991261136316723, 77.60475139166053];
  return (
    <MapContainer
      center={center}
      zoom={4}
      style={{ width: "100%", height: "90vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=yWf5XdnBxBRhEaDUGS2n"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <Polygon
        positions={coordinates}
        pathOptions={{
          fillColor: "#FD8D3C",
          fillOpacity: 0.7,
          weight: 2,
          opacity: 1,
          dashArray: 3,
          color: "white",
        }}
        eventHandlers={{
          mouseover: (e) => {
            const layer = e.target;
            layer.setStyle({
              dashArray: "",
              fillColor: "#BD0026",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              color: "white",
            });
          },
          mouseout: (e) => {
            const layer = e.target;
            layer.setStyle({
              fillOpacity: 0.7,
              weight: 2,
              dashArray: "3",
              color: "white",
              fillColor: "#FD8D3C",
            });
          },
        }}
      />
    </MapContainer>
  );
};

export default MapPage;
