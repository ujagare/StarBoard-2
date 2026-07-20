"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapComponent() {
  const position: [number, number] = [18.5666, 73.8053];
  const [mapKey, setMapKey] = useState(0);

  useEffect(() => {
    setMapKey((k) => k + 1);
  }, []);

  return (
    <MapContainer 
      key={mapKey}
      center={position} 
      zoom={15} 
      scrollWheelZoom={false}
      zoomControl={false}
      style={{ height: "100%", width: "100%", zIndex: 10, backgroundColor: "#0F1C2D" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />
    </MapContainer>
  );
}
