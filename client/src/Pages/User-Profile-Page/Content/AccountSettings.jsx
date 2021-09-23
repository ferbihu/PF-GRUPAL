import React, { useEffect } from "react";
import { getallsafesitie, deleteSafePlace } from "../../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./AccountSetting.css"
import imgUser from "../../../imgUser/avatar.png"

export default function AccountSettings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const name = useSelector((state) => state.userId)

  useEffect(() => {
  }, [name])

 
  let id_usuario = localStorage.getItem("userId") // me traigo el id del usuario que esta registrado
  let isLogged = localStorage.getItem("isLogged")
  let isAdmin = localStorage.getItem("isAdmin")
  const userDataById = useSelector((state) => state.userDataById);
  console.log(userDataById)


  const handleLogout = (e) => {
    e.preventDefault();
    if (isLogged === "true") {
      isLogged = "false";
      localStorage.setItem('isLogged',false)
      localStorage.setItem('userId',0)
      localStorage.setItem('token',null)
      localStorage.setItem('isAdmin', false)
      history.push("/iniciasesion");
      window.location.reload();
    }
  };

  return (
    isAdmin === "true" ? 
    <div className="contenedorProfile">
      <div className="contenedorinfouser">
        <img src={imgUser} className="imgUsername" alt="Not found"/>
        <h1>Hola {userDataById?.name}!</h1>
        <Link to="/panel">
          <h2>Panel de administrador</h2>
        </Link>
        <Link to="/users">
          <h2>Administrar usuarios</h2>
        </Link>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div> :
    <div className="contenedorProfile">
      <div className="contenedorinfouser">
        <img src={imgUser} className="imgUsername" alt="Not found"/>
        <h1>Hola {userDataById?.name}!</h1>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}
