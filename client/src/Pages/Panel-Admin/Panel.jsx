import React from 'react';
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCountry, getallsafesitie, getSafePlacePanel, filterPlacesByStatus } from '../../actions/actions';
import "./Panel.css"
import Card from '../../Components/Cards-Panel/Cards-Panel';


export default function Panel() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSafePlacePanel())
    }, [dispatch]);

    const lugaresSeguros = useSelector((state) => state.filtered_safePlaces)
    const user = useSelector((state) => state.user)


    function handleFilterCountry(e) {
        dispatch(filterByCountry(e.target.value))
    }

    function handleClick(e) {
        e.preventDefault();
        console.log(e.target.value)
        dispatch(filterPlacesByStatus(e.target.value))
    }

    return (
        <>
            <div className="titular">
                <div className="titulo-panel">
                    Panel de control
                </div>
                <div className="linea-panel"></div>
            </div>
            {/* <div className="nombre">{user}</div> */}
            <div className="fondopanel">
                <div className="filtrados-panel">
                    <button className="Pendientes" value="pending" onClick={(e) => handleClick(e)}>Pendientes</button>
                    <button className="Denunciados" value="warning" onClick={(e) => handleClick(e)}>Denunciados</button>
                    <button className="Aceptados" value="accepted" onClick={(e) => handleClick(e)}>Aceptados</button>
                    <button className="Rechazados" value="rejected" onClick={(e) => handleClick(e)}>Rechazados</button>

                    <select onChange={e => handleFilterCountry(e)}>
                        <option value="Argentina">Argentina</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Brasil">Brasil</option>
                        <option value="Chile">Chile</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Uruguay">Uruguay</option>
                        <option value="Venezuela">Venezuela</option>
                    </select>
                </div>
                <div className="cards-panel">
                    {lugaresSeguros.map(e => (
                        <Card name={e.name}
                            country={e.country}
                            street={e.street}
                            number={e.number}
                            email={e.email}
                            telephone={e.telephone}
                            town={e.town}
                            postcode={e.postcode}
                            status={e.status}
                            id={e.id}
                        />
                    ))
                    }
                </div>


            </div>
        </>


    )
}
