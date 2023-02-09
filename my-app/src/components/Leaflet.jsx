import React from "react";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import "./Leaflet.css";

const Leaflet = () => {

  return (
    <>
      <div className="map-c">
        <div className="map d-flex">
          <MapContainer
            style={{
              width: "60rem",
              height: "30rem",
              display: "inline-block",
              margin: "auto",
              borderRadius: "10px",
            }}
            center={[0, 0]}
            zoom={1}
            worldCopyJump={true}
          >

            <Polyline pathOptions={{ color: "yellow" }} positions={[]} />



            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
              maxZoom={20}
              subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Leaflet;
