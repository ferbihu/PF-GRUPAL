import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";



function Maps(props) {

  const coord = {lat:-34.607914 ,lng: -58.370321}

  return (
    <div>
      <GoogleMap defaultZoom={11} defaultCenter={coord} />
      <Marker position={coord} />
    </div>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Maps));

export function MapInit() {
  // geoCode();
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&language=en&key=AIzaSyDclWfFnp7AQpJjZQj7E9fsD7j6M9vPhTk`}
        containerElement={<div style={{ height: "500px", width: "300px" }} />}
        mapElement={<div style={{ height: "100%", width: "800px" }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}