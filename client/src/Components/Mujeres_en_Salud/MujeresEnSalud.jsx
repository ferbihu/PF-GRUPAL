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
        // eslint-disable-next-line
    }, []);
    

    return(
        <div>
            <SearchBarHealt></SearchBarHealt>
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
    )
}

export default Health;   