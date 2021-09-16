// import {
//     GoogleMap,
//     withScriptjs,
//     withGoogleMap,
//     Marker,
//     InfoWindow,
// } from "react-google-maps";
import { useLoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getSafeplace} from '../../actions/actions.js';
import pin from "./../../imgs/iconmapp.png"

 
  const containerStyle = {
    height: '50vw',
    width: '100hw'
  };
  const center = {
    lat: -34.6131500,
    lng: -58.3772300
};

export function Maps2(){

    const dispatch = useDispatch();
    const {markers,setMarker} = useState([]);
    const allsities = useSelector((state) => state.stateSitie);
    const {isLoaded,loadError} = useLoadScript({
      googleMapsApiKey : process.env.REACT_APP_API_KEY,
    
    });

    useEffect(()=>{
      dispatch(getSafeplace())
  },[]);

    const mapOnClick = useCallback((e)=>{
      setMarker((current) => [...current,
      {
        lat: e.latLng.lat(),
        lng:e.latLng.lng(),
        time :new Date()
      }
      ])
    },[]);

    const mapRef = useRef();
    const onMapLoad = useCallback((map)=>{
      mapRef.current = map;
    },[]);

    if(loadError){return "Error al cargar el mapa"}
    if(!isLoaded){return "Cargando mapa"}

    


      
    const sitios=[];

    if(allsities.length > 0){
    
    for(var i=0;i<allsities.length;i++){
        // eslint-disable-next-line
        var date = new Object();
        date.name = allsities[i].name;
        date.keyword = allsities[i].keyword;
        date.telephone = allsities[i].telephone;
        date.coord = {lat:allsities[i].lat,lng:allsities[i].lng};
        sitios.push(date);
    }
    }

    return (
        <div id = "mapContainer">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onClick = {mapOnClick}
          onLoad = {onMapLoad}
        >
          { 
          sitios.map((e,i)=>(
            <Marker key={i}
            position={e.coord} title={e.keyword} icon={pin}
            >
            </Marker>
            ))
          }
        </GoogleMap>
        </div>
    ) 
};