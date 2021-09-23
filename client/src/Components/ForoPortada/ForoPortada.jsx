import "./ForoPortada.css";
import { Link } from 'react-router-dom';
import React,{ useEffect,useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getNews} from '../../actions/actions';
import SearchCard from "../Carrusel/SearchCard";

export default function Foro() {

  const [inputSearch, setInputSearch] = useState({
    title:""
})
  
  function handleChange(e) {
    setInputSearch({
        ...inputSearch,
        title: e.target.value
    })
  }
    const allNoticias = useSelector((state) => state.news);

    console.log(allNoticias)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getNews());
    }, [dispatch]);
  

  const [idnoticias, setIdnoticias] = useState(0)
  
  let arrayfilter=[];

   allNoticias.map((nuevo)=>{

         if(nuevo.title.includes(inputSearch.title)){
          arrayfilter.push(nuevo);
         }
    })
  
console.log(arrayfilter)
 
  
  return (
    <div classeName="proyectocontainer">
      <div className="tittleforo">Foro</div>
      <div className="foroPortada-line"></div>
        <div>
        <input
          className="inputbusqueda"
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Noticia"
          value={inputSearch.title}
          onChange={(e) => handleChange(e)}
        />
        {
          arrayfilter?
                  <Link to={"/searchnews/"+inputSearch.title}>
        <button className='btnbuscar' type="submit">Buscar
        </button>
        </Link>
          :
          <Link to={"/failedsearch"}>
          <button className='btnbuscar' type="submit">Buscar
          </button>
          </Link>
        }

      </div>
    </div>
  );
}
