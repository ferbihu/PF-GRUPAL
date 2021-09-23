import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { byEspecialidades, getHealth} from '../../actions/actions';
import {Link} from 'react-router-dom';
import HealtCard from './HealtCard';
import './SearchBarHealt.css';

function SearchBarHealt() {
   const dispatch = useDispatch();
   // eslint-disable-next-line
   const [name, setName] = useState('');
   // eslint-disable-next-line
   const [loading, setLoading] = useState(false);
   const allHealth = useSelector((state) => state.healtNews);
   console.log(allHealth)
   // eslint-disable-next-line
   const especialidad = useSelector((state) => state.filterEspecialidad)
   console.log(especialidad)

     
  useEffect(() => {
    dispatch(getHealth());
  }, [dispatch]);

 

    function handleEspecialidad(e) {
     dispatch(byEspecialidades(e.target.value))
    };
   function render(props){
     return(
    
         <div className='home-salud'> 
            {
             props &&
                        props?.map(i => {
                            return(
                                <div key={i.id}>
                                    <HealtCard
                                        name={i.name}
                                        lastname={i.lastname}
                                        profession={i.profession}
                                        enrollment={i.enrollment}
                                        zone={i.zone}
                                        email={i.email}
                                        socialmedia={i.socialmedia}
                                        prepaidSocialWork={i.prepaidSocialWork}
                                        key={i.id}
                                    ></HealtCard>
                                </div>
                            );
                        })}
        </div>
     )
   }

    return(
        <div className='pcsalud'>
        <div className='titulo-salud'>Mujeres en Salud</div>
        <div className='search-line'></div>
      
        <Link to= '/formsalud'><button className='btnregistrosalud'>Registrate como profesional</button></Link>
        <div>
         <select className='selectsalud'onChange={handleEspecialidad} >
                    <option value="All">Especialidad</option>
                    <option value="Cardiología">Cardiología</option>
                    <option value="Cirugía">Cirugía</option>
                    <option value="Clinica">Clinica Médica</option>
                    <option value="Dermatología">Dermatología</option>
                    <option value="Flebología">Flebología</option>
                    <option value="Ginecología">Ginecología y Obstetricía</option>
                    <option value="Nutrición">Nutrición</option>
                    <option value="Oftalmología">Oftalmología</option>
                    <option value="Pediatría">Pediatría</option>
                    <option value="Psiquiatría">Psiquiatría</option>
                    <option value="Traumatología">Traumatología</option>
         </select>
         </div>
       <div>
           {especialidad?.length >0 ? render(especialidad) 
           : render(allHealth)
           }
       </div>
       </div>
    );
};

export default SearchBarHealt;