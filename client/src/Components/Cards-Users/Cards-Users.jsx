import React from 'react'
import "../Cards-Users/Cards-Users.css"
import { useDispatch } from 'react-redux';
import { changeRoleToAdmin } from '../../actions/actions';
import { useState, useEffect } from 'react';
import { getUsers } from '../../actions/actions'


export default function CardsUsers({ name, role, id }) {

    const dispatch = useDispatch();



    let [statusUser, setStatusUser] = useState(1)

    function HandleInputChange(id) {
        console.log(statusUser + " estadoviejo")
        dispatch(changeRoleToAdmin(id, role))
        setStatusUser(statusUser += 1)
        console.log(statusUser + " estadonuevo")

    }

    useEffect(() => {
        dispatch(getUsers())
    },
        // eslint-disable-next-line
        [statusUser]);

    useEffect(() => {
        dispatch(getUsers())
    },
        // eslint-disable-next-line
        [dispatch]);
    return (
        <div className="usuario-card">
            <div className="name-user">Nombre: {name}</div>
            <div className="role-user">Rol: {role}</div>
            <div className="boton-convertir">
                {role === "regular" && <button className="boton-convertir2" onClick={() => HandleInputChange(id)}>Convertir en admin</button>}
            </div>


        </div>
    )
}
