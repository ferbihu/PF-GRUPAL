import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getHealthByName } from '../../actions/actions';

function SearchBarHealt() {
    
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    
    function handleChange(e) {
        e.preventDefault()
        setName(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getHealthByName(name))
    };

    return(
        <div>
            <input
                type='text'
                placeholder='especialidad'
                onChange={e => handleChange(e)}
            ></input>
            <button
                type='submit'
                onClick={e => handleSubmit(e)}
            >Buscar</button>
        </div>
    );
};

export default SearchBarHealt;