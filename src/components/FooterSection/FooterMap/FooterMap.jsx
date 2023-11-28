import React from "react";
import GoogleMapReact from "google-map-react";

function FooterMap() {
  const defaultProps = {
    center: {
      lat: 23.834831,
      lng: 90.253815,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "300px", width: "100%", borderRadius: "10px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default FooterMap;
