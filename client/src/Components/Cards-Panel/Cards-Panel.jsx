import React from 'react';
import { useState, useEffect } from 'react';


import { useDispatch, useSelector } from "react-redux";
import { acceptedStatus } from '../../actions/actions';

import axios from 'axios';
import "./Cards-Panel.css";
import Popup from '../Popup/Popup';
import { getSafePlacePanel } from '../../actions/actions'
import swal from "sweetalert";
const { REACT_APP_BACK_BASE_URL } = process.env





export default function Card({ name, country, street, number, town, email, telephone, postcode, status, id }) {
    const dispatch = useDispatch();

    const [buttonPopup, setButtonPopup] = useState(false)


    let [statusOriginal, setstatusOriginal] = useState(1)


    const user = useSelector((state) => state.userDataById)
    console.log(user)

    const acceptedStatusHandler = async () => {
        dispatch(acceptedStatus(id))
        setstatusOriginal(statusOriginal += 2)
        swal("Lugar aceptado", name + " ahora se verá en el mapa", "success");
        await axios.post(`${REACT_APP_BACK_BASE_URL}/email/accepted`, user)


    }
    useEffect(() => {
        dispatch(getSafePlacePanel())
    },
        // eslint-disable-next-line
        [statusOriginal]);


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
