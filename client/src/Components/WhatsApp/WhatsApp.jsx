import React from "react";
//import { Link } from "react-router-dom";
import './WhatsApp.css';


export default function Foro(){
    
   return (
       <div  className='fondoWhatsapp'>
           <div className='titulo144'>
           <h3>Comunicate con el 144</h3>
           </div>
            <a href="javascript:window.open('https://api.whatsapp.com/send?phone=5491127716463','','width=600,height=400,left=50,top=50,toolbar=yes');void 0"><br />
              <button className='btnayuda'>BOTÓN DE AYUDA</button>
          </a> 
       </div>
   )
}