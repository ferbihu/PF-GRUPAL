import React from 'react';
import doc from '../../imgs/doc.png';
import './HealtCard.css';

function HealtCard({ name, lastname, profession, enrollment, zone, email, socialmedia, prepaidSocialWork, id }) {

    return(
        <div className='card-style-salud'>
            <div className='salud-name'>{name} {lastname}</div>
            <div className='linea-card'></div>
            <div className='profession-card'>{profession}</div>
            <img src={doc} alt="Not found" className="iconosalud" />
            <div className='matricula-card'>Matricula: {enrollment}</div>
            <div className='matricula-card'>Zona: {zone}</div>
            <div className='matricula-card'>E-mail: {email}</div>
            <div className='matricula-card'>Red Social: {socialmedia}</div>
            <div className='matricula-card'>Obra Social: {prepaidSocialWork}</div>
         </div>
    )
};

export default HealtCard;