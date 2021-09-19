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

import { getSafeplace } from '../../actions/actions.js';

import Sidebar from "../Sidebar/Sidebar.jsx";
import pin from "./../../imgs/iconmapp.png"
// import { Component } from "react-addons";
// const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// import "../Sidebar/Sidebar.css";

import PopupsSideBarWarning from "../Sidebar/PopupsSideBarWarning.jsx";
import PopupsComment from "../Sidebar/PopUpComent.jsx";


export default function Maps(props) {


  //const [myLatiLngi, setLatiLngi] = useState({})
  const state_popup = useSelector(state => state.popup)
  const state_popup_warning = useSelector(state => state.popup_warning)



  //ubicacion actual
var ban=false;

  function uno() {
    ban=true;
    navigator.geolocation.getCurrentPosition(function (position) {
      // guardo una version simplificada de la posicion en local storage
      localStorage.setItem('ultimaPosicion', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }));
      console.log("adentro", position)
    });
  }
  uno();


  var ultimaPosicion = localStorage.getItem('ultimaPosicion');
  let coordinate = JSON.parse(ultimaPosicion);

  if (/*false && */'geolocation' in navigator) {
    if (ultimaPosicion) {

      console.log("store", coordinate)
    } else {
      alert('No tenemos tu última ubicación');

    }
  } else {
    alert('Tu navegador no soporta geolocalización');
  }

  // eslint-disable-next-line 
  let [state, setState] = useState([]);
  // eslint-disable-next-line 

  const dispatch = useDispatch();
  // eslint-disable-next-line

  useEffect(() => {
    dispatch(getSafeplace())
  },
    // eslint-disable-next-line
    [state]);

  const allsities = useSelector((state) => state.stateSitie);
  console.log(allsities);
  const [input, setInput] = useState(false);
  const handleMarkerClick = (e) => {
    if (input === false) {
      setInput(true)
    } else {
      setInput(false)
    }
  }
  // eslint-disable-next-line
  const coord = { lat: -34.607914, lng: -58.370321 }
  // eslint-disable-next-line
  const descrip = 'hola'
  // eslint-disable-next-line
  var locations = [
    { description: 'First Safe', coord: { lat: -34.607914, lng: -58.370321 } },
    { description: 'Second Safe', coord: { lat: -34.596152, lng: -58.383100 } },
    { description: 'Third Safe', coord: { lat: -34.603972352446355, lng: -58.39045422694449 } },
    { description: 'Fourth Safe', coord: { lat: -34.603159908195096, lng: -58.39217084074385 } },
    { description: 'Fifth Safe', coord: { lat: -34.60248433708588, lng: -58.386806422620865 } },
    { description: 'Sixth Safe', coord: { lat: -34.59992329866319, lng: -58.39455264239046 } },
    { description: 'Seventh Safe', coord: { lat: -34.60405624569346, lng: -58.38845866340274 } }
  ];

  var har = [
    { description: 'Sixth Safe', coord: { lat: -34.59992329866319, lng: -58.39455264239046 } },
    { description: 'Seventh Safe', coord: { lat: -34.60405624569346, lng: -58.38845866340274 } }
  ];

  var sitios = [];
  var bandera = false;

  if (allsities.length > 0) {
    bandera = true;

    for (var i = 0; i < allsities.length; i++) {
      // eslint-disable-next-line
      var date = new Object();
      date.name = allsities[i].name;
      date.keyword = allsities[i].keyword;
      date.telephone = allsities[i].telephone;
      date.street = allsities[i].street;
      date.number = allsities[i].number;
      date.coord = { lat: allsities[i].lat, lng: allsities[i].lng };
      sitios.push(date);
    }
    console.log(sitios, "aca sitios")

  } else {
    console.log("no hizo dispacht")
  }
  return (
    <div>
      {
        ban?
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
        bandera ?
          sitios.map((e, i) => (
            <Marker key={i}
              position={e.coord} title={e.keyword} icon={pin} id={e.id} onClick={() => handleMarkerClick(e)}
            >
              {
                input && <Sidebar id={e.id} name={e.name} telephone={e.telephone} street={e.street} number={e.number} keyword={e.keyword} handleMarkerClick={handleMarkerClick} />

              }
              {
                state_popup && <PopupsComment text="Dejá una reseña del lugar! Recordá que el comentario será publico y todos podran verlo."></PopupsComment>
              }
              {
                state_popup_warning && <PopupsSideBarWarning text="Por favor, explicanos el motivo de la denuncia.  Si denuncias un lugar, automáticamente
                aparecerá de color amarillo en el mapa y será revisado por las administradoras de la página."></PopupsSideBarWarning>
              }
              <InfoWindow key={i}>
                <div id="content">
                  <div id="siteNotice"></div>
                  <h1 id="firstHeading" class="firstHeading">{e.keyword}</h1>
                  <div id="bodyContent">
                    <p>
                      {e.name}</p>
                    <p>{e.telephone}</p>
                    <div>
                      <button onClick="miFunc()" href="" className="button-24">Denuncia</button>
                      <button onClick="miFunc()" href="" className="button-25">Comentario</button>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            </Marker>
          )) : har.map((e, i) => (
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
                      <button onClick="miFunc()" href="" className="button-24">Denuncia</button>
                      <button onClick="miFunc()" href="" className="button-25">Comentario</button>
                    </div>
                  </div>
                </div>
              </InfoWindow>
            </Marker>
          ))
      }
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
        containerElement={<div style={{ height: "100vh", width: "100%" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}