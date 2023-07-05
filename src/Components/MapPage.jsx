import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Polygon, Marker, Popup } from "react-leaflet";
import { coordinates } from "../Data/CountryCoordinates";
import { Select } from "antd";
import L from "leaflet";
import { City } from "country-state-city";

const MapPage = () => {
  const mapRef = useRef();
  const [value, setValue] = useState("");
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const GetLocation = City.getCitiesOfCountry("IN");
  const location = GetLocation.filter((data) => data.name === value);
  const center = [
    !latitude ? 12.925683599374741 : latitude,
    !longitude ? 77.58827189641126 : longitude,
  ];
  const [markerLocation, setMarkerLocation] = useState(center);

  useEffect(() => {
    location.map((position) => {
      setLatitude(position.latitude);
      setLongitude(position.longitude);
      return value;
    });
  }, [location, value]);

  const markerIcon = new L.Icon({
    iconUrl: require("../Img/Location.png"),
    iconSize: [35, 35],
  });

  const GetCurrentLocation = () => {
    setMarkerLocation(center);
    const { current } = mapRef;
    const { _map } = current.boxZoom;
    _map.flyTo(center, 11.4, {
      duration: 2,
    });
  };

  return (
    <div className="mx-4">
      <div className="row my-2">
        <div className="col-5">
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
        <div className="d-flex justify-content-between col-1">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={GetCurrentLocation}
          >
            Search
          </button>
        </div>
      </div>
      <MapContainer
        center={center}
        zoom={11.4}
        style={{ width: "100%", height: "81vh" }}
        ref={mapRef}
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

        <Marker icon={markerIcon} position={markerLocation}>
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
