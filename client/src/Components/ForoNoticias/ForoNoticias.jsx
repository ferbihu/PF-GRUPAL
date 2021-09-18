import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../actions/actions.js';
import "./ForoNoticias.css";

export default function Foro(props) {
const getnews = useSelector ((state) => state.news)
// eslint-disable-next-line
const [cambio, setCambio] = useState(false)
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getNews(props.id));
  setCambio(true)
},[props.id, dispatch])

return (
  <div className='container'>
    <div className='tituloforo'>Foro</div>
    <div className='.foroNoticias-line'></div>
      {
          getnews.length>0 ?
          <div className=''>
             <img className='imagen' src= { getnews[0].image}   alt="no se encuentra la imagen" />
             <div className='titulonoti'> { getnews[0].title} </div>
             <p className='date'> { getnews[0].date}</p>
             <div className='rectangulonoticia'></div>
             <p className='parrafonoti'> { getnews[0].content}</p>
              </div> : <p className='loading'>Loading..</p>
      }
      <div>
        <button className="btnnotianterior" type="submit">Entrada anterior </button>
        <button className="btnnotisiguiente" type="submit">Entrada siguiente  </button>
      </div>
      <div className="comentariosforo"> Comentarios </div>
      <input
        className="inputcomentario"
        autoComplete="off"
        type="text"
        // value={input.description}
        name="description"
        placeholder="Qué te pareció la noticia?"
      />
       <button className="btnenviarcomentario" type="submit">  Envíar </button>
      <div>
        <button className="btnmascomentarios" type="submit">
          Ver más comentarios
        </button>
      </div>
  </div>
       
      
      
  
  )
}