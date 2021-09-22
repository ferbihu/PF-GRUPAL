import React from 'react';
import { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { byEspecialidades, getHealth } from '../../actions/actions';
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
    
     
  useEffect(() => {
    dispatch(getHealth());
  }, [dispatch]);

    //  function handleSubmit(e) {
    //      e.preventDefault()
    //      dispatch(getHealthByName(name))
    //  };

    function handleEspecialidad(e) {
        dispatch(byEspecialidades(e.target.value))
    };

    return(
        <div className='pcsalud'>
            <div className='titulo-salud'>Mujeres en Salud</div>
            <div className='search-line'></div>
            <Link to= '/formsalud'><button className='btnregistrosalud'>Registrate como profesional</button></Link>
            <div>
            {/* <button className='' onClick={(e) => handleSubmit(e)}>Buscar</button> */}
             <select className='selectsalud'onChange={e => handleEspecialidad(e)} >
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
                {
                    loading?
                    <div>
                        {
                            allHealth?.map(i => {
                                return(
                                    <div key={i.id}>
                                          <Link  to={"/salud/" + i.id}>
                                        <HealtCard
                                            name={i.name}
                                            lastname={i.lastname}
                                            profession={i.profession}
                                            enrollment={i.enrollment}
                                            zona={i.zone}
                                            email={i.email}
                                            socialmedia={i.socialmedia}
                                            prepaidSocialWork={i.prepaidSocialWork}
                                            key={i.id}
                                        ></HealtCard>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div> : <div>Loading</div>
                }
            </div>
            
        </div>
    );
};

export default SearchBarHealt;