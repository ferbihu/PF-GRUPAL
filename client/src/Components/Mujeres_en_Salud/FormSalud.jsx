import React from 'react';

import './FormSalud.css';


export default function FormMujeres() {

    return (
            <div className='pcform'>
                  <div className='titulo-form'>Registro de Mujeres en Salud</div>
                  <div className='form-line'></div>
                  <div>
                  <form className='rectangulosalud'>
                  <input className='saludname'
                        autoComplete='off'
                        type="text"
                        // value={input.name}
                        name="name"
                        placeholder="Nombre"           
                       />
                       <input className='saludlastname'
                        autoComplete='off'
                        type="text"
                        // value={input.lastname}
                        name="lastname"
                        placeholder="Apellido"           
                        />
                        <input className='saludespecialidad'
                        autoComplete='off'
                        type="text"
                        // value={input.especilidad}
                        name="especialidad"
                        placeholder="Especialidad"           
                        />
                        <input className='saludmatricula'
                        autoComplete='off'
                        type="text"
                        // value={input.matricula}
                        name="matricula"
                        placeholder="Número de matrícula"           
                        />
                        <input className='saludzona'
                        autoComplete='off'
                        type="text"
                        // value={input.zona}
                        name="zona"
                        placeholder="Zona de trabajo"           
                        />
                         <input className='saludred'
                        autoComplete='off'
                        type="text"
                        //value={input.redsocial}
                        name="redsocial"
                        placeholder="Red social"           
                        />
                        <input className='saludemail'
                        autoComplete='off'
                        type="text"
                       // value={input.email}
                        name="email"
                        placeholder="Email"           
                        />
                        <input className='saludtrabajo'
                        autoComplete='off'
                        type="text"
                        //value={input.trabajo}
                        name="trabajo"
                        placeholder="Obra social/Prepaga/Privado"     
                        />  
                         <button className="btnsalud" type='submit'>Registrar</button> 
              </form>
              </div>
            </div>  
    )
}