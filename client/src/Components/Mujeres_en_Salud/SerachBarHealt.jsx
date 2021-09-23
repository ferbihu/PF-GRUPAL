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
    
         <div>
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
       <div>
           {especialidad?.length >0 ? render(especialidad) 
           : render(allHealth)
           }
       </div>
       </div>
    );
};

export default SearchBarHealt;