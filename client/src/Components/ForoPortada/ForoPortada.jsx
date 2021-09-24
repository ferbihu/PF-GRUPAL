import "./ForoPortada.css";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../actions/actions';


export default function Foro() {

  const [inputSearch, setInputSearch] = useState({
    title: ""
  })

  function handleChange(e) {
    setInputSearch({
      ...inputSearch,
      title: e.target.value
    })
  }
  const allNoticias = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  let arrayfil = [];
  // eslint-disable-next-line
  allNoticias.map((nuevo) => {

    if (nuevo.title.includes(inputSearch.title)) {
      arrayfil.push(nuevo);
    }
  })
  return (
    <div className="proyectocontainer">

      <div className="contenedor-22">
        <div className="tittleforo22">Noticias</div>
        <div className="foroPortada-line22"></div>
      </div>

      <div className="container-busqueda22">
        <input
          className="inputbusqueda"
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Buscá una noticia"
          value={inputSearch.title}
          onChange={(e) => handleChange(e)}
        />
        {
          arrayfil.length > 0 ?
            <Link to={"/searchnews/" + inputSearch.title}>
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
