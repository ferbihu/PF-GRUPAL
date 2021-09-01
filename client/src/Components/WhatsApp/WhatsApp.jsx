import React from "react";
//import { Link } from "react-router-dom";
import './WhatsApp.css';


export default function Foro(){
   return (
       <div  className='fondoWhatsapp'>
           <div className='titulo144'>
           <h3>Comunicate con el 144</h3>
           </div>
           <a href="https://api.whatsapp.com/send?phone=5491127716463">
              <button className='btnayuda' >BOTÓN DE AYUDA</button>
          </a> 
       </div>
   )
}