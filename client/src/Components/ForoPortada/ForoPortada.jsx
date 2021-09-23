import "./ForoPortada.css";
import { Link } from 'react-router-dom';
import React,{ useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getNews} from '../../actions/actions';

export default function Foro() {

  const allNoti = useSelector((state) => state.news);
  console.log(allNoti)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const [inputSearch, setInputSearch] = useState({
    title:""
})

const [idnot, setIdnot] = useState(0)

function handleChange(e) {
  setInputSearch({
      ...inputSearch,
      title: e.target.value
  })

}

function handleSubmit(e) {

 allNoti.map((nuevo)=>{
   console.log(nuevo.title)
   console.log(inputSearch)
       if(nuevo.title.includes(inputSearch.title)){

      setIdnot({
          idnot:nuevo.id
      })
         console.log("noticia esta",idnot)
       }else{
         alert("Noticia no encontrada")
       }
  })

}

  
  return (
    <div classeName="proyectocontainer">
      <div className="tittleforo">Foro</div>
      <div className="foroPortada-line"></div>
      <div>
         <button className='btnbuscar' type="submit" onClick={(e) => handleSubmit(e)}>Buscar</button>
         <Link to={"/foronoticias/" + idnot}>IR</Link>
        <input
          className="inputbusqueda"
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Noticia"
          value={inputSearch.description}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
}
