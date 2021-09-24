import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSafePlacePanel, filterPlacesByStatus } from '../../actions/actions';
import "./Panel.css"
import Card from '../../Components/Cards-Panel/Cards-Panel';
import { Link } from 'react-router-dom';


export default function Panel() {


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSafePlacePanel())
    }, [dispatch]);

    const lugaresSeguros = useSelector((state) => state.filtered_safePlaces)

    async function handleClick(e) {
        e.preventDefault();
        dispatch(filterPlacesByStatus(e.target.value))
    }


    return (
        <div className="fondo-panel-principal">
            <div className="titular">
                <div className="titulo-panel">
                    Panel de control
                </div>
                <div className="linea-panel-control"></div>
            </div>
            <Link to="/cargarNoticia">
                <div className="cargar-noticia">
                    Cargar noticia
                </div>

            </Link>
            <div className="fondopanel">
                <div className="filtrados-panel">
                    <button className="Pendientes" value="pending" onClick={(e) => handleClick(e)}>Pendientes</button>
                    <button className="Denunciados" value="warning" onClick={(e) => handleClick(e)}>Denunciados</button>
                    <button className="Aceptados" value="accepted" onClick={(e) => handleClick(e)}>Aceptados</button>
                    <button className="Rechazados" value="rejected" onClick={(e) => handleClick(e)}>Rechazados</button>
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
        </div>


    )
}
