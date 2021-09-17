import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getCommentNotice,postCommentNotice } from '../../actions/actions.js';
import notamujeres from "../../imgs/notamujeres.png";
import "./ForoNoticias.css";

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

  console.log("fecha",fecha)
  const userId = useSelector((state) => state.userId);
  const Loggin = useSelector((state) => state.isLogged);
  const noticeId=1;

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
        dispatch(postCommentNotice({ ...input,userId,noticeId}))
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
            {allcomment.map((e, i) => (
             <div>
                {e.date}
                {e.description}
             </div>
            ))}
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
      <div>
        <button className="btnmascomentarios" type="submit">
          Ver más comentarios
        </button>
      </div>
    </div>
  );
}
