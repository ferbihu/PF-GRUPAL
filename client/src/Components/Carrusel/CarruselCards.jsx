import React from "react";
import './CarruselCards.css';


 export default function CarruselCards({ title, image, key }) {
   return (
      <div className='body'>
         <div className='card'>
           <img className='img' src={image} alt="img not found" />
            <div className='titlecards'>{title}</div>
           </div>
      </div>
   );
 }