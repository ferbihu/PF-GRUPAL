import "./FailedSearch.css";
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../actions/actions';

export default function FailedSearch() {


  const [inputSearch, setInputSearch] = useState({
    title: ""
  })

  function handleChange(e) {
    setInputSearch({
      ...inputSearch,
      title: e.target.value
    })
  }
  const allN = useSelector((state) => state.news);


  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(getNews());
    // eslint-disable-next-line
  }, [dispatch]);

  let arrayfilter = [];
  // eslint-disable-next-line
  allN.map((nuevo) => {
    if (nuevo.title.includes(inputSearch.title)) {
      arrayfilter.push(nuevo);
    }
  })

  return (
    <>
      <div className="tittleforo"></div>
      <div className='error'>Lo sentimos, su busqueda no produjo resultados</div>
      <div className="contenedor-error">

        <input
          className="inputsearch"
          autoComplete="off"
          type="text"
          name="description"
          placeholder="Buscador de noticias"
          value={inputSearch.title}
          onChange={(e) => handleChange(e)}
        />
        {
          arrayfilter ?
            <div className="boton-buscar">
              <Link to={"/searchnews/" + inputSearch.title}>
                <button className='btnbuscar' type="submit">Buscar
                </button>
              </Link>
            </div>

            :
            <div className="boton-buscar">
              <Link to={"/failedsearch"}>
                <button className='btnbuscar' type="submit">Buscar
                </button>
              </Link>
            </div>

        }

      </div>
    </>
  );
}
