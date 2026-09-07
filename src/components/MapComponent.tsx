"use client";

import { Map, MapMarker, MarkerContent, MarkerTooltip } from '@/components/ui/mapcn-marker-tooltip';

// Raichandani Galaxy, Baner, Pune — Starboard Realtors office.
const OFFICE_LONGITUDE = 73.8053;
const OFFICE_LATITUDE = 18.5666;

export default function MapComponent() {
  return (
    <Map
      theme="light"
      center={[OFFICE_LONGITUDE, OFFICE_LATITUDE]}
      zoom={15}
      scrollZoom={false}
      className="h-full w-full"
    >
      <MapMarker longitude={OFFICE_LONGITUDE} latitude={OFFICE_LATITUDE}>
        <MarkerContent>
          <div
            data-mapcn-marker="Starboard Realtors"
            className="size-5 rounded-full border-2 border-white bg-[#CFA85F] shadow-lg transition-transform hover:scale-110"
          />
        </MarkerContent>
        <MarkerTooltip className="bg-[#0F1C2D] text-[#CFA85F] font-sans">
          Starboard Realtors — Raichandani Galaxy, Baner, Pune
        </MarkerTooltip>
      </MapMarker>
    </Map>
  );
}
