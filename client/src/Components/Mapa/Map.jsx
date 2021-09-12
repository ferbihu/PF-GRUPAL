import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import { compose, withProps } from "recompose";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import {connect} from 'react-redux';
import {getSafeplace} from '../../actions/actions.js';

import pin from "./../../imgs/iconmapp.png"
import Mapa from "./Mapa.css"



export default function Maps(props) {

  const [myLatiLngi, setLatiLngi] = useState({})

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

      setLatiLngi(myLatLng);
  }

  function errorHandler(err) {
      if(err.code == 1) {
          alert("Error: Acceso denegado");
      } else if(err.code == 2) {
          alert("Error: Position no existe o no se encuentra");
      }
  }    
  

const [statecoord,setCoord]=useState({lat:0,long:0});


function componentWillMount(){
  if (!!navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      setCoord({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    },
    (err) => console.log(err),
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
    );
  } else {
    //  // No Support Web
    alert('El navegador no soporta la geolocalización,')
  }
}

componentWillMount();


  const dispatch = useDispatch();

  const todo=useEffect(async() => {
    console.log(props)
    await initMap()
    dispatch(getSafeplace())
    },[])

  const allsities = useSelector((state) => state.stateSitie);

  const coord = {lat:-34.607914 ,lng: -58.370321}
  const descrip='hola'
  
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
     var date=new Object();
     date.description=allsities[i].name;
     date.coord={lat:allsities[i].lat,lng:allsities[i].lng};
     sitios.push(date);
  }
 
}else{
  console.log("no hizo dispacht")
}


const contentString =
'<div id="content">' +
'<div id="siteNotice">' +
"</div>" +
'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
'<div id="bodyContent">' +
"<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
"sandstone rock formation in the southern part of the " +
"Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
"south west of the nearest large town, Alice Springs; 450&#160;km " +
'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
"https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
"(last visited June 22, 2009).</p>" +
"</div>" +
"</div>";


const [stateOpen,setState] = useState({isOpen:false});


function handleChangeOpen(markerId){
  setState({
      ...stateOpen,
      isOpen : true
  })
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
          position={e.coord} title={e.description} icon={pin}>
             <InfoWindow key={i}>    
                     <div id="content">
                        <div id="siteNotice"></div>
                              <h1 id="firstHeading" class="firstHeading">El gato</h1>
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
        <Marker key={i}
          position={statecoord} title="aqui#" icon={pin}>
          </Marker>
    </div>
  );
}
const WrappedMap = withScriptjs(withGoogleMap(Maps));

export function Map() {
  // geoCode();
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&language=en&key=AIzaSyDclWfFnp7AQpJjZQj7E9fsD7j6M9vPhTk`}
        containerElement={<div style={{ height: "500px", width: "100%" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}