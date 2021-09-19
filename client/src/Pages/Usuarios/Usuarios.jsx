import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../actions/actions'
import CardsUsers from '../../Components/Cards-Users/Cards-Users'
import "./Usuarios.css"

export default function Usuarios() {

    const dispatch = useDispatch();
    const allusers = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);



    return (
        <div className="fondo-principal-usuarios">
            <div className="titulo-administrar">
                Administrar usuarios
            </div>
            <div className="linea-panel"></div>
            <div className="usuarios-background">
                {allusers.map(e => (
                    <CardsUsers
                        name={e.name}
                        role={e.role}
                        id={e.id}

                    />
                ))
                }
            </div>
        </div>



    )
}
