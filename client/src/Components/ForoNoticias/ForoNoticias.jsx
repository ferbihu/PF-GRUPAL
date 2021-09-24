import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCommentNotice, getNewsById, postCommentNotice } from '../../actions/actions.js';
import { useParams } from 'react-router-dom';
import "./ForoNoticias.css";
import style from "./Comment.module.css"
const { REACT_APP_BACK_BASE_URL } = process.env


export default function Foro(props) {
  // eslint-disable-next-line 

  const {id} = useParams();
  const idUser = localStorage.getItem("userId")
  
 function getCurrentDate(separator='-'){


    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`

  }
  const fecha = getCurrentDate();
  // eslint-disable-next-line 
  let [stateComment, setStateComment] = useState(1);
  // eslint-disable-next-line 
  let [stateNewId, setStateNew] = useState([]);
  // eslint-disable-next-line 

  const dispatch = useDispatch();
  // eslint-disable-next-line


  useEffect(() => {
    dispatch(getCommentNotice(id))
  },
    // eslint-disable-next-line
    [stateComment]);

  const allcomment = useSelector((state) => state.stateCommentNotice);

  useEffect(() => {
    dispatch(getNewsById(id))
  },
    // eslint-disable-next-line
    [stateNewId]);

  const getnews = useSelector((state) => state.statenewsid);
  const Loggin = localStorage.getItem("isLogged")


  const [input, setInput] = useState({
    description: "",
    date: fecha,
  })
  function handleChange(e) {
    setInput({
      ...input,
      description: e.target.value
    })

  
}
   async function handleSubmit(e) {
       e.preventDefault();
       if(Loggin==="true"){
        dispatch(postCommentNotice({ ...input},idUser,id))
        setInput({
          ...input,
          description:""
         })
         setStateComment({
          stateComment:2
         })

       }else{
         alert("Por favor logueate!")
       }


  }

  return (
    <div className='pc'>
      <div className='tituloforo'>Noticia</div>
      <div className='lineaaa'></div>
      {
        getnews.length > 0 ?
          <div>
            <div className="padreImg">
            {/* eslint-disable-next-line */}
            <img className='imgNotamujeres' src={`${REACT_APP_BACK_BASE_URL}/` + getnews[0].image} className="img-detail" alt="no se encuentra la imagen" />
            </div>
            <div className='tittleydate'>
              <div className='titulonoti'> {getnews[0].title}</div>
              <p className='date'> {getnews[0].date}</p>
            </div>
            <div className='rectangulonoticia'>
              <p className='parrafonoti'> {getnews[0].content}</p>
            </div>
          </div> : <p className='loading'>Loading..</p>
      }

      <div>
      </div>
      <div className="comentariosforo">
        Comentarios
      </div>
      <div>
        <div className={style.sty}>
          <svg xmlns="http://www.w3.org/2000/svg">
            <symbol viewBox="0 0 24 24" id="expand-more">
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /><path d="M0 0h24v24H0z" fill="none" />
            </symbol>
            <symbol viewBox="0 0 24 24" id="close">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" />
            </symbol>
          </svg>
        </div>

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
      <div className="contenedorbot">
      <button className="btnenviarcomentario" type="submit" onClick={(e) => handleSubmit(e)}>
        Envíar
      </button>
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
                    Mas comentarios
                    <svg className={style.controlicon && style.controliconexpand} width="24" height="24" role="presentation"></svg>
                    <svg className={style.controlicon && style.controliconclose} width="24" height="24" role="presentation"></svg>
                </summary>
                 {allcomment.map((e, i) => (
       <div className="messages"> 
      <div className="message-box">
                                        {/* eslint-disable-next-line */} 
                                           
                    <div className="fecha">{e.date}</div>
                    <div className="message-content">
                    <div className="otro">{e.description}</div>
              </div>
        </div>
        </div> 
            ))}
              </details>
    </div>

      </div>
     
     
  );
}