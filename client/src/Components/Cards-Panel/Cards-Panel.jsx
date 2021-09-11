import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptedStatus, getSafePlacePanel } from '../../actions/actions';



import "./Cards-Panel.css";
import Popup from '../Popup/Popup';

export default function Card({ name, country, street, number, town, email, telephone, postcode, status, id }) {
    const dispatch = useDispatch();

    const [buttonPopup, setButtonPopup] = useState(false)

    const lugaresSeguros = useSelector((state) => state.filtered_safePlaces)

    const acceptedStatusHandler = () => {
        console.log("entro al accepted handler" + id)
        dispatch(acceptedStatus(id))
    }
    return (

        <>

            {<div className="card-style">

                <div className="status-card" value={status}>{status}</div>
                <div className="name-card"><span className="span-card">{name}</span></div>
                <div className="linea-card"></div>
                <div className="country-card"><span className="span-card">{town}, {country}</span></div>
                <div className="country-card"><span className="span-card">Dirección:</span> {street} {number}</div>
                <div className="country-card"><span className="span-card">E-mail: </span>{email}</div>
                <div className="country-card"><span className="span-card">Celular:</span> {telephone}</div>

                {status !== "accepted" && <button className="Aceptar" onClick={() => acceptedStatusHandler(id)}>Aceptar</button>}
                {status !== "rejected" && <button onClick={() => setButtonPopup(true)} className="Rechazar">Rechazar</button>}

            </div>
            }
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup} id={id}>
            </Popup>
        </>




    )
}
