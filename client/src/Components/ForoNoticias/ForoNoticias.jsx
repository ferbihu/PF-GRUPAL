import React, { useState } from 'react';
import { useSelector } from "react-redux";
import './ForoNoticias.css';

export default function Foro() {
    // eslint-disable-next-line
    const userId = useSelector((state) => state.userId);
    // eslint-disable-next-line
    const [input, setInput] = useState({
        description: "",   
    })
    return (
        <div>
            <div className='tituloforo'>
             <h1>Foro</h1>
             <div className='foroNoticiasSeguro-line'></div>
            </div>
            <div className='titulonoti'><h2>Titulo noticia</h2></div>
        <div className='rectangulonoticia'><h3>Acá se renderiza noticia</h3></div>
        <div>
        <button className="btnnotianterior" type='submit'>Entrada anterior</button>
        <button className="btnnotisiguiente" type='submit'>Entrada siguiente</button>
        </div>
        <div className='comentariosforo'><h1>Comentarios</h1></div>
         <input className='inputcomentario'
         autoComplete='off'
         type="text"
         value={input.description}
         name="comentarios"
         placeholder="Qué te pareció la noticia?"
     />
       <button className="btnenviarcomentario" type='submit'>Envíar</button>
       <div>
           <button className="btnmascomentarios" type='submit'>Ver más comentarios</button>
       </div>

        </div>

    )

}