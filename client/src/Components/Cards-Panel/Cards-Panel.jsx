import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallsafesitie } from '../../actions/actions';
import "./Cards-Panel.css";
import Popup from '../Popup/Popup';

export default function Card({ name, country, street, number, town, email, telephone, postcode }) {
    const dispatch = useDispatch();
    const [buttonPopup, setButtonPopup] = useState(false)
    /* 
        useEffect(() => {
            dispatch(getallsafesitie())
        }, [dispatch]);
    
        const lugaresSeguros = useSelector((state) => state.stateSitie)
        console.log(lugaresSeguros) */

    return (

        <>

            {<div className="card-style">

                <div className="status-card">Pendiente</div>
                <div className="name-card"><span className="span-card">{name}</span></div>
                <div className="linea-card"></div>
                <div className="country-card"><span className="span-card">{town}, {country}</span></div>
                <div className="country-card"><span className="span-card">Dirección:</span> {street} {number}</div>
                <div className="country-card"><span className="span-card">E-mail: </span>{email}</div>
                <div className="country-card"><span className="span-card">Celular:</span> {telephone}</div>
                <button className="Aceptar">Aceptar</button>
                <button onClick={() => setButtonPopup(true)} className="Rechazar">Rechazar</button>
            </div>
            }
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            </Popup>
        </>




    )
}
