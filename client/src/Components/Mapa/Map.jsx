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


  function uno(){
    navigator.geolocation.getCurrentPosition(function(position) {
      // guardo una version simplificada de la posicion en local storage
      localStorage.setItem('ultimaPosicion', JSON.stringify({lat: position.coords.latitude, lng: position.coords.longitude}));
      console.log("adentro",position)
    });
  }
uno();


  var ultimaPosicion = localStorage.getItem('ultimaPosicion');

  let coordinate =JSON.parse(ultimaPosicion);

  console.log("store",coordinate)

// si el navegador soporta geolocalizacion muestro la ultima visita que tengo
// guardada en local storage (o aviso que no tengo ultima visita guardada)
// si no soporta geolocalizacion (se puede probar descomentando el false &&)
// aviso al usuario que el navegador no lo soporta
if(/*false && */'geolocation' in navigator) {
  if(ultimaPosicion) {
    var objPosicion = JSON.parse(ultimaPosicion);
    let dire = 'Tu última visita fue desde: longitud:' + objPosicion.latitude + ' - longitud: ' + objPosicion.longitude;
  } else {
    let ult = 'No tenemos tu última ubicación';
  }
} else {
 let not = 'Tu navegador no soporta geolocalización';
}


 //todo llamado de base// 
  const dispatch = useDispatch();

  let [state, setState] = useState([]);
// eslint-disable-next-line
  useEffect(() => {
  dispatch(getSafeplace())
  },
  // eslint-disable-next-line
  [state]);
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

  var har = [
    {description:'Sixth Safe',coord:{lat: -34.59992329866319, lng:-58.39455264239046}},
    {description:'Seventh Safe',coord:{lat: -34.60405624569346, lng:-58.38845866340274}}
  ];

  var sitios=[];
  var bandera=false;

if(allsities.length>0){
  bandera=true;
   
  for(var i=0;i<allsities.length;i++){
    // eslint-disable-next-line
     var date=new Object();
     date.name=allsities[i].name;
     date.keyword=allsities[i].keyword;
     date.telephone=allsities[i].telephone;
     date.coord={lat:allsities[i].lat,lng:allsities[i].lng};
     sitios.push(date);
  }
 
}else{
  console.log("no hizo dispacht")
}
  return (
    <div>
      
      {
        bandera? 
        <div>
        <GoogleMap defaultZoom={11} defaultCenter={coordinate} />
        <Marker key={100}
          position={coordinate} icon={pin}
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
        bandera?
        sitios.map((e,i)=>(
          <Marker key={i}
          position={e.coord} title={e.keyword} icon={pin}
          >
             <InfoWindow key={i}>    
                     <div id="content">
                        <div id="siteNotice"></div>
                              <h1 id="firstHeading" class="firstHeading">{e.keyword}</h1>
                              <div id="bodyContent">
                              <p>
                              {e.name}    {e.telephone}</p>
                          <div>
                             <button onclick="miFunc()" href="" className="button-24">Denuncia</button>
                              <button onclick="miFunc()" href="" className="button-25">Comentario</button>
                          </div>
                         </div>
                     </div>
             </InfoWindow>
          </Marker>
        )): har.map((e,i)=>(
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
        ))
        }

        {/* <Marker key={i}
          position={statecoord} title="aqui#" icon={pin}>
          </Marker> */}

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