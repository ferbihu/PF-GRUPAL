import React from "react";
export default function PlaceAprobation({ name, lastname, country, town, street, number, mail, telephone, keyword, relation}) {
   return (
      <div>
       <h3>{name}</h3>
       <h3>{lastname}</h3>
       <h3>{country}</h3>
       <h3>{town}</h3>
       <h3>{street}</h3>
       <h3>{number}</h3>
       <h3>{telephone}</h3>
       <h3>{mail}</h3>
       <h3>{relation}</h3>
      </div>
   );
 }
