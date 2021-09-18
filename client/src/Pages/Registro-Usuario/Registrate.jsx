import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from "../../actions/actions";
import { connect } from "react-redux";
import axios from "axios";
import "./Registrate.css";
import swal from "sweetalert";

const{ REACT_APP_BACK_BASE_URL} = process.env


function Register({ addUser, responseGoogle }) {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
        //eslint-disable-next-line
  const dispatch = useDispatch();

  const validate = (input) => {
    let pattern = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    let errors = {};
    if (!input.name) {
      errors.name = "Name is required";
    }
    if (!input.email) {
      errors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = "email is invalid";
    }
    if (!input.password) {
      errors.password = "Password is required";
    } else if (!pattern.test(input.password)) {
      errors.password = "Password is invalid";
    }
    return errors;
  };

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    addUser(input);
    swal("Usuario creado", "Ya podes iniciar sesión!", "success");  
      history.push("/iniciasesion");
    
    await axios.post(`${REACT_APP_BACK_BASE_URL}/email/welcome`, input)
    setInput({
      name: "",
      email: "",
      password: "",
    });
   
  };

  return (
    <div className="fondo-registrate">
      <h2 className="txtRegistrate">Registrate</h2>

      <div className="line-registrate"></div>
      <div className="card">
        <form className="regis-form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <br />
            <label className="p3">Nombre</label>
            <input
              className={`${errors.name && "danger"}`}
              type="text"
              name="name"
              onChange={handleInputChange}
              value={input.name}
                      //eslint-disable-next-line
              className="reg-username"
              placeholder="Ingrese su nombre"
            />
            {errors.name && <p className="danger">{errors.name}</p>}
          </div>
          <div>
            <label className="p4">Email</label>
            <input
              className={`${errors.email && "danger"}`}
              type="text"
              name="email"
              placeholder="nombre@ejemplo.com"
              onChange={(e) => handleInputChange(e)}
              value={input.email}
                      //eslint-disable-next-line
              className="reg-email"
            />
            {errors.email && <p className="danger">{errors.email}</p>}
          </div>
          <div>
            <label className="p5">Contraseña</label>
            <input
              className={`${errors.password && "danger"}`}
              type="password"
              name="password"
              placeholder="Más de 6 carácteres"
              onChange={(e) => handleInputChange(e)}
              value={input.password}
                      //eslint-disable-next-line
              className="reg-password"
            />
            {errors.password && <p className="danger">{errors.password}</p>}
          </div>
          <div className="FormInput">
            <Link to='/iniciasesion'> 
           <button href='/iniciasesion'
              className="reg-submit"
              onClick={handleSubmit}
            >
              Registrate
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (info) => dispatch(addUser(info)),
  };
}

export default connect(null, mapDispatchToProps)(Register);
