import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import './FormSalud.css';
import { postHealth, byEspecialidades } from '../../actions/actions';
import swal from "sweetalert";


function validate(input) {
  let errors = {};
  if (!input.name) {
      errors.name = 'Se requiere un nombre';
  }
  else if (!input.lastname) {
      errors.lastname = 'Se requiere un apellido';
  }
  else if (!input.profession) {
      errors.profession = 'Se requiere una profesión';
  }
  else if (!input.enrollment) {
      errors.enrollment = 'Se requiere una matricula';
  }
  else if (!input.zone) {
      errors.zone = 'Se requiere una zona';
  }
  else if (!input.socialmedia) {
      errors.socialmedia = 'Se requiere una red social';
  }
  else if (!input.email) {
      errors.email = 'Se requiere un email';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
      errors.email = "email es inválido";
    }
  else if (!input.prepaidSocialWork) {
      errors.prepaidSocialWork = 'Se requiere una prepaga/obra social';
  }
  return errors;
};
export default function FormMujeres() {
  const dispatch = useDispatch()
  const userId = localStorage.getItem("userId")
  const history = useHistory();

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
        swal("Tu profesión fue registrada", "Verficá tu mail para continuar", "success");    
        history.push("/salud");
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
             <select className='selectsaludform' onChange={e => handleProfession(e)}>
             <option value="All">Especialidad</option>
                    <option value="Cardióloga">Cardióloga</option>
                    <option value="Cirujana">Cirujana</option>
                    <option value="Clinica Médica">Clinica Médica</option>
                    <option value="Dermatóloga">Dermatóloga</option>
                    <option value="Flebóloga">Flebóloga</option>
                    <option value="Ginecóloga">Ginecóloga y Obstetra</option>
                    <option value="Nutricionista">Nutricionista</option>
                    <option value="Oftalmóloga">Oftalmóloga</option>
                    <option value="Pediatra">Pediatra</option>
                    <option value="Psicóloga">Psicóloga</option>
                    <option value="Psiquiatra">Psiquiatra</option>
                    <option value="Traumatóloga">Traumatóloga</option>
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
                        type="email"
                        value={input.email}
                        name="email"
                        placeholder="nombre@example.com"
                        onChange={e => handleChange(e)}
                        pattern=".+@globex\.com" size="30" required/>
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
                         <button className="btnsalud" type='submit' disabled={!input.name || !input.lastname || !input.profession || !input.enrollment || !input.zone || !input.socialmedia || !input.email || !input.prepaidSocialWork } onClick={(e) => handleSubmit(e)}>Registrar</button> 
             
              </form>
              </div>
            </div>  
    )
}