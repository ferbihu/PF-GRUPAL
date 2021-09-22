import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { byEspecialidades, getHealthByName } from '../../actions/actions';
import {Link} from 'react-router-dom';
import './SearchBarHealt.css';

function SearchBarHealt() {
   const dispatch = useDispatch();
   // eslint-disable-next-line
   const [name, setName] = useState('');

    
    
    // function handleChange(e) {
    //     e.preventDefault()
    //     setName(e.target.value)
    // };
  // eslint-disable-next-line 
     function handleSubmit(e) {
         e.preventDefault()
         dispatch(getHealthByName(name))
     };

    function handleStatus(e) {
        dispatch(byEspecialidades(e.target.value))
    };

    return(
        <div className='pcsalud'>
            <div className='titulo-salud'>Mujeres en Salud</div>
            <div className='search-line'></div>
            <Link to= '/formsalud'><button className='btnregistrosalud'>Registrate como profesional</button></Link>
             <select className='selectsalud'onChange={e => handleStatus(e)} >
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
             </select>
            
        </div>
    );
};

export default SearchBarHealt;