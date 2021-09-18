import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCommentNotice,postCommentNotice } from '../../actions/actions.js';
import notamujeres from "../../imgs/notamujeres.png";
import "./ForoNoticias.css";
import style from "./Comment.css";

export default function Foro() {


 function getCurrentDate(separator='-'){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }
const fecha = getCurrentDate();
// eslint-disable-next-line 
let [stateComment, setStateComment] = useState([]);
// eslint-disable-next-line 

const dispatch = useDispatch();
// eslint-disable-next-line

useEffect(() => {
  dispatch(getCommentNotice())
},
  // eslint-disable-next-line
  [stateComment]);

const allcomment = useSelector((state) => state.stateCommentNotice);
console.log("todos",allcomment);

const [nuevo, setNuevo] = useState({
})

  console.log("fecha",fecha)
  //const userId = useSelector((state) => state.userId);
  const Loggin = useSelector((state) => state.isLogged);
  const noticeId=1;
  const userId=1;

  console.log("iduser",userId)
  const [input, setInput] = useState({
       description:"",
       date:fecha,
   })
   function handleChange(e) {
    setInput({
        ...input,
        description: e.target.value
    })
    console.log("comentario ingresado",input)
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
    <div className='proyectocontainer'>
      <div className="tituloforo"> Foro </div>
        <div className="foroNoticias-line"></div>
     
      <img src={notamujeres} alt="Not found" className="imgNotamujeres" />
      <div className="titulonoti">
        <h2>Mujeres latinoamericanas en ciencia y tecnología</h2>
      </div>
      <div className="rectangulonoticia">
        <div className="parrafonoti">
          <p>
            Las carreras profesionales en STEM son los empleos del futuro.
            También han sido carreras donde las mujeres han estado
            históricamente subrrepresentadas. Algunas de las ocupaciones STEM
            con mayores ingresos, como la informática y la ingeniería, tienen
            los porcentajes más bajos de mujeres trabajadoras. Para fomentar el
            desarrollo sostenible, impulsar la innovación, el bienestar social y
            el crecimiento inclusivo necesitamos más mujeres en STEM. Dar a las
            mujeres igualdad de oportunidades para desarrollar y prosperar en
            carreras STEM ayuda a reducir la brecha salarial de género, mejora
            la seguridad económica de las mujeres, garantiza una fuerza de
            trabajo diversa y talentosa, y evita los sesgos en estos campos y en
            los productos y servicios elaborados. El mundo necesita más ciencia
            y la ciencia necesita a las mujeres y a las niñas. Conoce a estas
            siete mujeres latinoamericanas que inspiran a nuevas generaciones de
            niñas y mujeres en ciencia.
          </p>

          <p>
            {" "}
            Valentina Muñoz Rabanal es una activista juvenil feminista,
            estudiante de enseñanza media. Es programadora desde los 12 años; y
            tricampeona regional, campeona nacional y mundial, del concurso
            internacional de robótica First LEGO League. Electa por Ashoka como
            una de las(os) 7 jóvenes más influyentes del país en 2020, esta
            joven es también fundadora de la Secretaría de Diversidad de Género
            y Sexualidad del Liceo Carmela Carvajal (Sedigesex); y presidenta de
            la Asociación de Mujeres Jóvenes por las Ideas (AMUJI Chile).
          </p>
          <p>
            Investigadora del programa para la Conservación de los Murciélagos
            de Bolivia y de la Red Latinoamérica para la Conservación de
            Murciégalos, Barboza es la primera científica boliviana en ganar la
            beca del programa de la Unesco y la Fundación L’Oreal para jóvenes
            científicas (2012). Redescubrió en Bolivia el murciélago Nariz de
            Espada que se creía extinto desde hacía 72 años. Su investigación
            coadyuvó a ampliar el conocimiento sobre los servicios ambientales
            que los murciélagos le ofrecen a las poblaciones humanas en
            diferentes hábitats.
          </p>
        </div>
      </div>

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
