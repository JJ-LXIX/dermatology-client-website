"use client";

import React from "react";
// import maplibregl from "maplibre-gl";
// import Map, { NavigationControl, Marker } from "react-map-gl";
// import "maplibre-gl/dist/maplibre-gl.css";

function MapComponent({}) {
  return (
    <div className="relative mx-auto h-[50vh] w-[80%] overflow-hidden rounded-2xl border-4  border-black p-2 shadow-lg md:h-[50vh]  md:w-full lg:h-[70vh]">
      {/* <Map
        mapLib={maplibregl}
        className="absolute inset-0 p-2 rounded-2xl"
        initialViewState={{
          longitude: 78.041,
          latitude: 27.17115,
          zoom: 14,
          }}
          style={{ borderRadius: "10px" }}
          mapStyle="https://api.maptiler.com/maps/streets-v2/style.json?key=vF9I9gEjq30xZHr86gew"
          >
          <NavigationControl position="top-left" />
          <Marker longitude={78.042} latitude={27.173} color="red" />
          </Map> */}
      <p className="absolute inset-0 flex items-center justify-center text-center text-black">
        Interactive Map Here
      </p>
    </div>
  );
}

export default MapComponent;
