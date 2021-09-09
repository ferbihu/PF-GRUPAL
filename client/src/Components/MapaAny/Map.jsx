import { useEffect } from "react";
import React from "react";
import {google} from 'react-google-maps';

function Map() {

    let map;
    let marker;
    let watchID;
    let geoLoc;

    function initMap() {
        const myLatLng = {lat: -25.363, lng: 131.044};
        map = new window.google.maps.Map(document.getElementById("map"), {
            zoom: 4,
            center: myLatLng
        });
        marker = new window.google.maps.Marker({
            position: myLatLng,
            map,
            title: "Hello Word"
        });
        getPosition();
    }

    function getPosition() {
        if(navigator.geolocation) {
            var options = {timeout:60000};
            geoLoc = navigator.geolocation; 
            watchID = geoLoc.watchPosition(showLocationOnMap, errorHandler, options)
        } else {
            alert("Lo sentimos, el explorador no soporta geolocalizacion");
        }
    }

    function showLocationOnMap(position) {
        var latitud = position.coords.latitude;
        var longitud = position.coords.longitude;
        console.log("latitud: " + latitud + " Longitud: " + longitud);

        const myLatLng = {  lat: latitud, lng: longitud};
        marker.setPosition(myLatLng);
        map.setCenter(myLatLng);
    }

    function errorHandler(err) {
        if(err.code == 1) {
            alert("Error: Acceso denegado");
        } else if(err.code == 2) {
            alert("Error: Position no existe o no se encuentra");
        }
    }    

    useEffect(() => {
        initMap()
    },[])

    return(
        <div>Hiii</div>
    )
}

export default Map; 