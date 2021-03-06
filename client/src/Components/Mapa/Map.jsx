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
import pin from "./../../imgs/ms-icon-50x50.png";
import warning from "./../../imgs/warning.png";
import ubi from "../../imgs/ms-icon-60x60.png"
import PopupsSideBarWarning from "../Sidebar/PopupsSideBarWarning.jsx";
import PopupsComment from "../Sidebar/PopUpComent.jsx";


export default function Maps(props) {

  const state_popup = useSelector(state => state.popup)
  const state_popup_warning = useSelector(state => state.popup_warning)

  let [estado1, setEstado1] = useState(1)

  function cambiarEstado() {
    setEstado1(estado1 += 1)
  }

  //ubicacion actual
  var ban = false;

  function uno() {
    ban = true;
    navigator.geolocation.getCurrentPosition(function (position) {
      // guardo una version simplificada de la posicion en local storage
      localStorage.setItem('ultimaPosicion', JSON.stringify({ lat: position.coords.latitude, lng: position.coords.longitude }));
    });
  }
  uno();


  var ultimaPosicion = localStorage.getItem('ultimaPosicion');
  let coordinate = JSON.parse(ultimaPosicion);

  if (/*false && */'geolocation' in navigator) {
    if (!ultimaPosicion) {
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
    [estado1]);


  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getSafeplace())
    // eslint-disable-next-line
  }, []);


  const allsities = useSelector((state) => state.stateSitie);
  const [input, setInput] = useState(false);
  const [datos, setDatos] = useState({});
  const handleMarkerClick = (e) => {
    if (input === false) {
      setInput(true)
      setDatos(e)
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
      date.id = allsities[i].id;
      date.status = allsities[i].status;
      date.coord = { lat: allsities[i].lat, lng: allsities[i].lng };
      date.id = allsities[i].id;
      sitios.push(date);
    }


  } else {
    console.log("no hizo dispacht")
  }
  return (
    <div>
      {
        ban ?
          <div>
            <GoogleMap defaultZoom={11} defaultCenter={coordinate} />
            <Marker key={100}
              position={coordinate} icon={ubi}
            >
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
              position={e.coord} title={e.keyword} icon={e.status === "accepted" ? pin : warning} id={e.id} onClick={() => handleMarkerClick(e)}

            >
              {
                input && <Sidebar id={datos.id} name={datos.name} telephone={datos.telephone} street={datos.street} number={datos.number} keyword={datos.keyword} handleMarkerClick={() => handleMarkerClick(e)} />

              }
              {
                state_popup && <PopupsComment setInput={() => setInput()} id={datos.id} text="Dejá una reseña del lugar! Recordá que el comentario será publico y todos podran verlo."></PopupsComment>
              }
              {
                state_popup_warning && <PopupsSideBarWarning id={e.id} cambiarEstado={() => cambiarEstado()} text="Por favor, explicanos el motivo de la denuncia.  Si denuncias un lugar, automáticamente
                aparecerá de color amarillo en el mapa y será revisado por las administradoras de la página."></PopupsSideBarWarning>
              }
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