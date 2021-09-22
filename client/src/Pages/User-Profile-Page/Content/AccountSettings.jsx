import React, { useEffect } from "react";
import { getallsafesitie,getUserById, deleteSafePlace } from "../../../actions/actions";
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

 
  let lugaresSeguros = useSelector((state) => state.stateSitie) //estado con todos los lugares seguros aceptados
  console.log(lugaresSeguros)
  let id_usuario = localStorage.getItem("userId") // me traigo el id del usuario que esta registrado
  let isLogged = localStorage.getItem("isLogged")
  let isAdmin = localStorage.getItem("isAdmin")
  const userDataById = useSelector((state) => state.userDataById);
  console.log(userDataById)



//console.log("SOY USER DATAID",userDataById)
  const [input, setInput] = useState({
    name: userDataById?.name || "",
    lastname:userDataById?.lastname || "",
    country: userDataById?.country || "",
    town: userDataById?.town || "",
    phone: userDataById?.phone || "",

  });

  const handleInputChange = (e) => {
    console.log("entre acaaaaaaaaaaa")
    e.preventDefault()
    console.log("HANDLE CHANGE INPUUUUUUT",e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };


  const handleSelectCountry = (e) => {
    console.log(e.target.value);
    setInput({ ...input, country: e.target.value });
  };

  const handleSelectTown = (e) => {
    console.log(e.target.value);
    setInput({ ...input, town: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      dispatch(updateDataUser(id_usuario, input));
      alert("Se han actualizados sus datos");
  };



  let lugaresSegurosFiltrados = lugaresSeguros.filter(e => e.userId !== id_usuario)


  useEffect(() => {
    dispatch(getallsafesitie());
  }, [dispatch]);


  useEffect(()=>{
    console.log("ESTOY EN EL USE EFECT",id_usuario)
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



  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteSafePlace(lugaresSegurosFiltrados.id))

  } 

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
        <h3>Tus lugares seguros</h3>
        {
          lugaresSegurosFiltrados?.map((s) => (
            <div className="contenedor-lugares">
            <div>
              <button onClick={handleDelete}>X</button>
              <p>{s.name}</p>
              <p>{s.country}</p>
              <p>{s.keyword}</p>
            </div>
            </div>
          ))
        }
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div> :
    <div className="contenedorProfile">
      <div className="contenedorinfouser">
        <img src={imgUser} className="imgUsername" alt="Not found"/>
        <h1>Hola {userDataById?.name}!</h1>
        <h3>Tus lugares seguros</h3>
        {
          lugaresSegurosFiltrados?.map((s) => (
            <div className="contenedor-lugares">
            <div>
            <button onClick={handleDelete}>X</button>
            <p>{s.name}</p>
            <p>{s.country}</p>
            <p>{s.keyword}</p>
            </div>
            </div>
          ))
        }
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </div>
  );
}
