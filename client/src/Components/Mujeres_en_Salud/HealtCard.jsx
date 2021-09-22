import React from 'react';
import './HealtCard.css';

function HealtCard({ name, lastname, profession, enrollment, zone, email, socialmedia, prepaidSocialWork, id }) {

    return(
        <div className='card-style'>
            <div className='salud-name'>{name} {lastname}</div>
            <div className='linea-card'></div>
            <div className='profession-card'>{profession}</div>
            <div className='matricula-card'>Matricula: {enrollment}</div>
            <div className='matricula-card'>Zona: {zone}</div>
            <div className='matricula-card'>Email: {email}</div>
            <div className='matricula-card'>Red Social: {socialmedia}</div>
            <div className='matricula-card'>Forma de trabajo: {prepaidSocialWork}</div>
         </div>
    )
};

export default HealtCard;