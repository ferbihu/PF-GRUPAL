import React from 'react'
import "../Cards-Users/Cards-Users.css"
import { useDispatch } from 'react-redux';
import { changeRoleToAdmin } from '../../actions/actions';

export default function CardsUsers({ name, role, id }) {

    const dispatch = useDispatch();

    function HandleInputChange(id) {
        dispatch(changeRoleToAdmin(id, role))
        console.log(id, role)
    }
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
