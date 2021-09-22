import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './FormSalud.css';
import { postHealth, byEspecialidades } from '../../actions/actions';
import swal from "sweetalert";
//import axios from "axios";
//const { REACT_APP_BACK_BASE_URL } = process.env


function validate(input) {
  let errors = {};
  if (!input.name) {
      errors.name = 'Se requiere un nombre';
  }
  else if (!input.lastname) {
      errors.lastname = 'Se requiere un apellido';
  }
  else if (!input.profession) {
      errors.profession = 'Se requiere una ciudad';
  }
  else if (!input.enrollment) {
      errors.enrollment = 'Se requiere una calle';
  }
  else if (!input.zone) {
      errors.zone = 'Se requiere un número';
  }
  else if (!input.socialmedia) {
      errors.socialmedia = 'Se requiere un código postal';
  }
  else if (!input.email) {
      errors.email = 'Se requiere un mail';
  }
  else if (!input.prepaidSocialWork) {
      errors.prepaidSocialWork = 'Se requiere un teléfono';
  }
  return errors;
};
export default function FormMujeres() {
  const dispatch = useDispatch()
  const userId = localStorage.getItem("userId")

    const [errors, setErrors] = useState({});
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        profession: "",
        enrollment: "",
        zone: "",
        socialmedia: "",
        email: "",
        prepaidSocialWork: "",
    })
    function handleChange(e){
      setInput({
          ...input,
          [e.target.name] : e.target.value
      })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }));
  }
  function handleProfession(e) {
    setInput({ ...input, profession: e.target.value })
    dispatch(byEspecialidades(e.target.value))
};

   function handleSubmit(e) {
    e.preventDefault();
    setErrors(validate({
        ...input,
        [e.target.name]:e.target.value
    }));
    dispatch(postHealth( input, userId))
        swal("Tu lugar fue registrado", "Verficá tu mail para continuar", "success");    
        setInput({
          name: "",
          lastname: "",
          profession: "",
          enrollment: "",
          zone: "",
          socialmedia: "",
          email: "",
          prepaidSocialWork: "",
        })

    }
    return (
            <div className='pcform'>
                  <div className='titulo-form'>Registro de Mujeres en Salud</div>
                  <div className='form-line'></div>
                  <div>
                  <form className='rectangulosalud'  onSubmit={e => {handleSubmit(e)}}>
                  <input className='saludname'
                        autoComplete='off'
                        type="text"
                        value={input.name}
                        name="name"
                        placeholder="Nombre"     
                        onChange={e => handleChange(e)}      
                       />
                         {errors.name && (
                        <p className='errorname'>{errors.name}</p>
                        )}
                       <input className='saludlastname'
                        autoComplete='off'
                        type="text"
                        value={input.lastname}
                        name="lastname"
                        placeholder="Apellido"   
                        onChange={e => handleChange(e)}        
                        />
                        {errors.lastname && (
                        <p className='errorname'>{errors.lastname}</p>
                        )}
                          <div>
             <select className='selectsalud' onChange={e => handleProfession(e)}>
                        <option value="All">Especialidad</option>
                        <option value="cardiología">Cardiología</option>
                        <option value="cirugía">Cirugía</option>
                        <option value="clinica">Clinica Médica</option>
                        <option value="dermatología">Dermatología</option>
                        <option value="flebología">Flebología</option>
                        <option value="ginecología">Ginecología y Obstetricía</option>
                        <option value="nutrición">Nutrición</option>
                        <option value="oftalmología">Oftalmología</option>
                        <option value="pediatría">Pediatría</option>
                        <option value="psiquiatría">Psiquiatría</option>
                        {input.profession}</select>
                </div>
                        <input className='saludmatricula'
                        autoComplete='off'
                        type="text"
                        value={input.enrollment}
                        name="enrollment"
                        placeholder="Número de matrícula"
                        onChange={e => handleChange(e)}
                        />
                        {errors.enrollment && (
                        <p className='errorname'>{errors.enrollment}</p>
                       )}
                        <input className='saludzona'
                        autoComplete='off'
                        type="text"
                        value={input.zone}
                        name="zone"
                        placeholder="Zona de trabajo"           
                        onChange={e => handleChange(e)}
                        />
                        {errors.zone && (
                        <p className='errorname'>{errors.zone}</p>
                       )}
                         <input className='saludred'
                        autoComplete='off'
                        type="text"
                        value={input.socialmedia}
                        name="socialmedia"
                        placeholder="Red social"         
                        onChange={e => handleChange(e)}  
                        />
                       {errors.socialmedia && (
                        <p className='errorname'>{errors.socialmedia}</p>
                       )}
                        <input className='saludemail'
                        autoComplete='off'
                        type="text"
                        value={input.email}
                        name="email"
                        placeholder="Email"
                        onChange={e => handleChange(e)}
                        />
                        {errors.email && (
                        <p className='errorname'>{errors.email}</p>
                       )}
                        <input className='saludtrabajo'
                        autoComplete='off'
                        type="text"
                        value={input.prepaidSocialWork}
                        name="prepaidSocialWork"
                        placeholder="Obra social/Prepaga/Privado"  
                        onChange={e => handleChange(e)}   
                        />  
                       {errors.prepaidSocialWork && (
                        <p className='errorname'>{errors.prepaidSocialWork}</p>
                       )}
                         <button className="btnsalud" type='submit' onClick={(e) => handleSubmit(e)}>Registrar</button> 
              </form>
              </div>
            </div>  
    )
}