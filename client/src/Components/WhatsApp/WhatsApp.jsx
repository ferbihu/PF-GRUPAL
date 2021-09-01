import React from "react";
import {Link} from 'react-router-dom';
import './WhatsApp.css';


export default function Foro(){
   return (
       <div >
           <h3>Comunicate con el 144</h3>
           <Link to='/' >
               <button className='btnayuda'>
                   BOTÓN DE AYUDA
               </button>
           </Link>
       </div>
   )
}