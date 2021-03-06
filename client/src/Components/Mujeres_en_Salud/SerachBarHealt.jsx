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
   // eslint-disable-next-line
  let [estado, setEstado] = useState(1)

  useEffect(() => {
    dispatch(getHealth());
    // eslint-disable-next-line
  }, [estado]);

  useEffect(() => {
    dispatch(getHealth());
    // eslint-disable-next-line
  }, []);

 

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
                    <option value="Cardi??loga">Cardi??loga</option>
                    <option value="Cirujana">Cirujana</option>
                    <option value="Clinica M??dica">Clinica M??dica</option>
                    <option value="Dermat??loga">Dermat??loga</option>
                    <option value="Fleb??loga">Fleb??loga</option>
                    <option value="Ginec??loga">Ginec??loga y Obstetra</option>
                    <option value="Nutricionista">Nutricionista</option>
                    <option value="Oftalm??loga">Oftalm??loga</option>
                    <option value="Pediatra">Pediatra</option>
                    <option value="Psic??loga">Psic??loga</option>
                    <option value="Psiquiatra">Psiquiatra</option>
                    <option value="Traumat??loga">Traumat??loga</option>
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