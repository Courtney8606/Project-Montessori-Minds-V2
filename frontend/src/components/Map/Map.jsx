import React from "react";
import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import "./Map.css";

const GoogleMap = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const MAP_ID = import.meta.env.VITE_MAP_ID;

  const position = {
    lat: 51.57686112641848,
    lng: 0.18805078588758062,
  };

  if (!API_KEY || !MAP_ID) {
    console.error("API key or Map ID not provided or incorrectly configured.");
    return null;
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="map">
        <Map defaultZoom={15.6} center={position} mapId={MAP_ID} />
        <AdvancedMarker position={position} />
      </div>
    </APIProvider>
  );
};

export default GoogleMap;
