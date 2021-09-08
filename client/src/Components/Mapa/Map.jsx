import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,

} from "react-google-maps";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {connect} from 'react-redux';
import {getallsafesitie} from '../../actions/actions.js';

import pin from "./../../imgs/iconmapp.png"



function Maps(props) {

  const dispatch = useDispatch();

  const todo=useEffect(() => {
    dispatch(getallsafesitie())
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
      <GoogleMap defaultZoom={11} defaultCenter={coord} 
      />
      {
        sitios.map((e,i)=>(
          <Marker key={i}
          position={e.coord} title={e.description} icon={pin} 
          >
             <InfoWindow >    
                 <div id="content">
                      <div id="siteNotice"></div>
                      <h1 id="firstHeading" class="firstHeading">Uluru</h1>
                      <div id="bodyContent">
                      <p>
                      <button onclick="miFunc()">Denuncia</button>
                      <button onclick="miFunc()">Comentario</button>
                      <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">
                      https://en.wikipedia.org/w/index.php?title=Uluru</a> 
                      last visited June 22, 2009).</p>
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
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&language=en&key=AIzaSyDclWfFnp7AQpJjZQj7E9fsD7j6M9vPhTk`}
        containerElement={<div style={{ height: "500px", width: "100%" }} />}
        mapElement={<div style={{ height: "100%", width: "100%" }} />}
        loadingElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}