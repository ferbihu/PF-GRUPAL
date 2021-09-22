import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHealth } from '../../actions/actions';
import HealtCard from './HealtCard.jsx';
import SearchBarHealt from './SerachBarHealt.jsx';

function Health() {

    const dispatch = useDispatch();
    const allHealth = useSelector(e => e.healtNews);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getHealth());
        setLoading(true)
    }, [dispatch]);

    return(
        <div>
            <Link to='/postHealt'>Posteá</Link>
            <SearchBarHealt></SearchBarHealt>
            <div>
                {
                    loading?
                    <div>
                        {
                            allHealth?.map(i => {
                                return(
                                    <div>
                                        <HealtCard
                                            key={i.id}
                                            name={i.name}
                                            lastName={i.lastName}
                                            matricula={i.matricula}
                                            zona={i.zona}
                                            email={i.email}
                                            redes={i.email}
                                            contacto={i.contacto}
                                        ></HealtCard>
                                    </div>
                                )
                            })
                        }
                    </div> : <div>Loading</div>
                }
            </div>
        </div>
    )
}

export default Health;   