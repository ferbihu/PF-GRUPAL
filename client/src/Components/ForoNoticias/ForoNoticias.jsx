import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {postCommentNotice, getNewsById } from '../../actions/actions.js';
import "./ForoNoticias.css";
import style from "./Comment.css";

export default function Foro(props) {
// const {id} = props.match.params;

 function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
const fecha = getCurrentDate();
// eslint-disable-next-line 
// let [stateComment, setStateComment] = useState([]);
// eslint-disable-next-line 

const dispatch = useDispatch();

// eslint-disable-next-line
const [cambio, setCambio] = useState(false)

useEffect(() => {
  // dispatch(getCommentNotice())
  const newsId=async()=>{
  await dispatch(getNewsById(props.id));
  setCambio(true)
  }
  newsId()
  // eslint-disable-next-line
},[])
// },[props.id, stateComment, dispatch])
// console.log(id)
  // eslint-disable-next-line
  // [stateComment]);
// eslint-disable-next-line
const getnews = useSelector ((state) => state.news_by_id)

const allcomment = useSelector((state) => state.stateCommentNotice);


//const [nuevo, setNuevo] = useState({})

  //const userId = useSelector((state) => state.userId);
  const Loggin = useSelector((state) => state.isLogged);
  const noticeId=1;
  const userId=1;

  const [input, setInput] = useState({
       description:"",
       date:fecha,
   })
   function handleChange(e) {
    setInput({
        ...input,
        description: e.target.value
    })
  
}

   async function handleSubmit(e) {
       e.preventDefault();
       console.log("guarda",input)
       if(Loggin){
        dispatch(postCommentNotice({ ...input},userId,noticeId))
       }else{
         alert("Por favor logueate!")
       }

  }
  return (
    <div className='container'>
      <div className='tituloforo'>Foro</div>
      <div className='.foroNoticias-line'></div>
        {
            getnews.length>0 ?
            <div className=''>
               <img className='imagen' src= { getnews[0].image}   alt="no se encuentra la imagen" />
               <div> { getnews[0].title}</div>
               <p className='date'> { getnews[0].date}</p> 
               <div className='rectangulonoticia'></div>
               <p className='parrafonoti'> { getnews[0].content}</p>
                </div> : <p className='loading'>Loading..</p>
        }
 
      <div>
        <button className="btnnotianterior" type="submit">
          Entrada anterior
        </button>
        <button className="btnnotisiguiente" type="submit">
          Entrada siguiente
        </button>
      </div>
      <div className="comentariosforo">
        Comentarios
      </div>
      <div>
            <div className={style.sty}>
                <svg xmlns="http://www.w3.org/2000/svg">
                    <symbol viewBox="0 0 24 24" id="expand-more">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/>
                    </symbol>
                    <symbol viewBox="0 0 24 24" id="close">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/>
                    </symbol>
                  </svg>
            </div>
            <details open>
                <summary className="btnmascomentarios">
                  mas comentarios
                </summary>
                {allcomment.map((e, i) => (
                      <p>
                          {e.date}
                          {e.description}
                      </p>
                 ))}
           </details>
      </div>
      <input
        className="inputcomentario"
        autoComplete="off"
        type="text"
        value={input.description}
        name="description"
        placeholder="Qué te pareció la noticia?"
        onChange={(e) => handleChange(e)}
      />
      <button className="btnenviarcomentario" type="submit" onClick={(e) => handleSubmit(e)}>
        Envíar
      </button>
    </div>
  );
}
