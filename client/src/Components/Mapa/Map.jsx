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
import { connect } from 'react-redux';
import { getSafeplace } from '../../actions/actions.js';
import Sidebar from "../Sidebar/Sidebar.jsx";
import pin from "./../../imgs/iconmapp.png"
// import { Component } from "react-addons";
// const { InfoBox } = require("react-google-maps/lib/components/addons/InfoBox");
// import "../Sidebar/Sidebar.css";

import PopupsSideBarWarning from "../Sidebar/PopupsSideBarWarning.jsx";


export default function Maps(props) {

  const [myLatiLngi, setLatiLngi] = useState({})
  const state_popup = useSelector(state => state.popup)
  const state_popup_warning = useSelector(state => state.popup_warning)



  let map;
  let marker;
  // eslint-disable-next-line
  let watchID;
  let geoLoc;

  function initMap() {
    const myLatLng = { lat: -25.363, lng: 131.044 };
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
    if (navigator.geolocation) {
      var options = { timeout: 60000 };
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

    const myLatLng = { lat: latitud, lng: longitud };
    marker.setPosition(myLatLng);
    map.setCenter(myLatLng);

    setLatiLngi(myLatLng);
  }

  function errorHandler(err) {
    // eslint-disable-next-line
    if (err.code == 1) {
      alert("Error: Acceso denegado");
      // eslint-disable-next-line
    } else if (err.code == 2) {
      alert("Error: Position no existe o no se encuentra");
    }
  }


  const dispatch = useDispatch();
  // eslint-disable-next-line
  const todo = useEffect(async () => {
    console.log(props)
    await initMap()
    dispatch(getSafeplace())
  },
    // eslint-disable-next-line
    [])

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
        myLatiLngi.lat ?
          <div>
            <GoogleMap defaultZoom={11} defaultCenter={myLatiLngi} />
            <Marker key={100}
              position={myLatiLngi} icon={pin}
            >
              <InfoWindow >
                <div id="content">
                  <div id="siteNotice"></div>
                  <h1 id="firstHeading" class="firstHeading">Tu ubicación</h1>

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
                state_popup && <PopupsSideBarWarning text="Dejá una reseña del lugar! Recordá que el comentario será publico y todos podran verlo."></PopupsSideBarWarning>
              }
              {
                state_popup_warning && <PopupsSideBarWarning text="Por favor, explicanos el motivo de la denuncia.  Si denuncias un lugar, automáticamente
                aparecerá de color amarillo en el mapa y será revisado por las administradoras de la página."></PopupsSideBarWarning>
              }
              <InfoWindow key={i}>
                <div id="content">
                  <div id="siteNotice"></div>
                  <div id="firstHeading">
                    <p>{e.name}</p>
                  </div>
                  <h1 id="bodyContent" >{e.street} {e.number}</h1>

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
        containerElement={<div style={{ height: "100vh", width: "100%" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}