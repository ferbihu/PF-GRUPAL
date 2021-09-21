import React from 'react';

function HealtCard(props) {

    return(
        <div>
            <h1>{props.name}</h1>
            <h3>{props.lastName}</h3>
            <h3>{props.matricula}</h3>
            <h3>{props.zona}</h3>
            <h3>{props.email}</h3>
            <h3>{props.redes}</h3>
            <h3>{props.contacto}</h3>
        </div>
    )
};

export default HealtCard;