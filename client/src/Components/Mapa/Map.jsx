import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line
import {connect} from 'react-redux';
import {getSafeplace} from '../../actions/actions.js';

import pin from "./../../imgs/iconmapp.png"



export default function Maps(props) {

  const [myLatiLngi, setLatiLngi] = useState({})

  let map;
  let marker;
  // eslint-disable-next-line
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

      setLatiLngi(myLatLng);
  }

  function errorHandler(err) {
    // eslint-disable-next-line
      if(err.code == 1) {
          alert("Error: Acceso denegado");
          // eslint-disable-next-line
      } else if(err.code == 2) {
          alert("Error: Position no existe o no se encuentra");
      }
  }    
  

  const dispatch = useDispatch();
// eslint-disable-next-line
  const todo=useEffect(async() => {
    console.log(props)
    await initMap()
    dispatch(getSafeplace())
    },
    // eslint-disable-next-line
    [])

  const allsities = useSelector((state) => state.stateSitie);
// eslint-disable-next-line
  const coord = {lat:-34.607914 ,lng: -58.370321}
  // eslint-disable-next-line
  const descrip='hola'
  // eslint-disable-next-line
  var locations = [
    {description:'First Safe',coord:{lat:-34.607914,lng:-58.370321}},
    {description:'Second Safe',coord:{lat: -34.596152, lng:-58.383100}},
    {description:'Third Safe', coord:{lat:-34.603972352446355, lng:-58.39045422694449}},
    {description:'Fourth Safe',coord:{lat: -34.603159908195096,lng:-58.39217084074385}},
    {description:'Fifth Safe',coord:{lat: -34.60248433708588, lng:-58.386806422620865}},
    {description:'Sixth Safe',coord:{lat: -34.59992329866319, lng:-58.39455264239046}},
    {description:'Seventh Safe',coord:{lat: -34.60405624569346, lng:-58.38845866340274}}
  ];


  var sitios=[];

if(allsities.length>0){
   
  for(var i=0;i<allsities.length;i++){
    // eslint-disable-next-line
     var date=new Object();
     date.description=allsities[i].name;
     date.coord={lat:allsities[i].lat,lng:allsities[i].lng};
     sitios.push(date);
  }
 
}else{
  console.log("no hizo dispacht")
}
  return (
    <div>
      
      {
        myLatiLngi.lat? 
        <div>
        <GoogleMap defaultZoom={11} defaultCenter={myLatiLngi} />
        <Marker key={100}
          position={myLatiLngi} icon={pin}
        >
          <InfoWindow >    
                     <div id="content">
                        <div id="siteNotice"></div>
                              <h1 id="firstHeading" class="firstHeading">AQUI</h1>
                              <div id="bodyContent">
                         </div>
                     </div>
             </InfoWindow>
          </Marker> 
        </div> :
        <div>
        <Marker></Marker> 
        </div>
      }
      {
        sitios.map((e,i)=>(
          <Marker key={i}
          position={e.coord} title={e.keyword} icon={pin}
          >
             <InfoWindow key={i}>    
                     <div id="content">
                        <div id="siteNotice"></div>
                              <h1 id="firstHeading" class="firstHeading">KEY</h1>
                              <div id="bodyContent">
                              <p>
                              <a href="https://www.argentina.gob.ar/generos/linea-144">
                              https://www.argentina.gob.ar/generos/linea-144</a> 
                              {e.keyword}{e.telephone}</p>
                          <div>
                             <button onclick="miFunc()" href="" className="button-24">Denuncia</button>
                              <button onclick="miFunc()" href="" className="button-25">Comentario</button>
                          </div>
                         </div>
                     </div>
             </InfoWindow>
          </Marker>
        ))}
    </div>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Maps));

export function Map() {
  // geoCode();
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&language=en&key=AIzaSyAbMjLYFsoiuJmlFydaakLeC6uhqYh1iL0`}
        containerElement={<div style={{ height: "500px", width: "100%" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}