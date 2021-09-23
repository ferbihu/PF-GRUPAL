import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import "./AccountSetting.css"
import imgUser from "../../../imgUser/avatar.png"
import { getUserById } from "../../../actions/actions";

export default function AccountSettings() {

  const history = useHistory();

  const name = useSelector((state) => state.userId)
  const rolllll = useSelector((state) => state.role)
  useEffect(() => {
  }, [name])
  if (rolllll === "admin") {
    localStorage.setItem("isAdmin", true)
  }
 

  let isLogged = localStorage.getItem("isLogged")
  let isAdmin = localStorage.getItem("isAdmin")
  let id_usuario = localStorage.getItem("userId") 
  const userDataById = useSelector((state) => state.userDataById);
  console.log(userDataById)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserById(id_usuario))
  },
  // eslint-disable-next-line
  [dispatch]);

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
        <h1 className="name">Hola {userDataById?.name}!</h1>
        <h2 className="mail">Email: {userDataById?.email}</h2>
        <Link to="/panel">
          <button className="btn1">Panel de administrador</button>
        </Link>
        <Link to="/users">
          <button className="btn2">Administrar usuarios</button>
        </Link>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div> :
    <div className="contenedorProfile">
      <div className="contenedorinfouser">
        <img src={imgUser} className="imgUsername" alt="Not found"/>
        <h1 className="name">Hola {userDataById?.name}!</h1>
        <h2 className="mail">Email: {userDataById?.email}</h2>
        <Link to="registratelugarseguro">
        <button>Registrá un lugar seguro</button>
        </Link>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}
