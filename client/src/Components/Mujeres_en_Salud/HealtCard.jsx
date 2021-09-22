import React from 'react';

function HealtCard({ name, lastname, profession, enrollment, zone, email, socialmedia, prepaidSocialWork, id }) {

    return(
        <div>
            <h1>{name}</h1>
            <h3>{lastname}</h3>
            <h3>{profession}</h3>
            <h3>{enrollment}</h3>
            <h3>{zone}</h3>
            <h3>{email}</h3>
            <h3>{socialmedia}</h3>
            <h3>{prepaidSocialWork}</h3>
        </div>
    )
};

export default HealtCard;