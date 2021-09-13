import React from "react";
import './MySafePlace.css';

 export default function MySafePlace({ name, country, town, street, number, postcode, email, telephone, keyword, relation}) {
 
  return (
        <div>
       <div className='card-style'>
       <div className="status-card" value={name}>{name}</div>
       <div className="linea-card"></div>
                <div className="country-card"><span className="span-card">{town}, {country}</span></div>
                <div className="country-card"><span className="span-card">Dirección:</span> {street} {number}</div>
                <div className="country-card"><span className="span-card">Código postal:</span> {postcode}</div>
                <div className="country-card"><span className="span-card">E-mail: </span>{email}</div>
                <div className="country-card"><span className="span-card">Celular:</span> {telephone}</div>
                <div className="country-card"><span className="span-card">Palabra clave: </span>{keyword}</div>
                <div className="country-card"><span className="span-card">Relación:</span> {relation}</div>
        <button className="btnmysp" type='submit'>Eliminar mi lugar seguro</button>
       </div>
    
      </div>
    );
  }
 
