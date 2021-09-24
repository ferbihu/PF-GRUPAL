
import "./Carrusel.css"
import { Link } from 'react-router-dom';
import React,{ useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {getNews} from '../../actions/actions';
import Slider from 'infinite-react-carousel';


const{ REACT_APP_BACK_BASE_URL} = process.env

const Carrusel = () => {

  const allNews = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);


var imagenes=[];
var idnoticia=[];
var titulo=[];
for(var i=0;i<allNews.length;i++){
     imagenes.push(allNews[i].image)
     idnoticia.push(allNews[i].id)
     titulo.push(allNews[i].title)
}

  return(

    <Slider autoplay={true} autoplaySpeed={3000} dots>
      <div className='slider'>
        <Link to={"/foronoticias/" + idnoticia[0]}>
         {/* eslint-disable-next-line */}
        <img src={`${REACT_APP_BACK_BASE_URL}/` + imagenes[0]} alt="travel image" className="image"/>
         {/* eslint-disable-next-line */} 
         <div className="centrado">{titulo[0]}</div>
        </Link>
      </div>
      <div>
      <Link to={"/foronoticias/" + idnoticia[1]}>
        {/* eslint-disable-next-line */}
        <img src={`${REACT_APP_BACK_BASE_URL}/` + imagenes[1]} alt="travel image" className="image"/>
         {/* eslint-disable-next-line */} 
         <div className="centrado">{titulo[1]}</div>
        </Link>
      </div>
      <div>
      <Link to={"/foronoticias/" + idnoticia[2]}>
        {/* eslint-disable-next-line */}
        <img src={`${REACT_APP_BACK_BASE_URL}/` + imagenes[2]} alt="travel image" className="image"/>
         {/* eslint-disable-next-line */} 
         <div className="centrado">{titulo[2]}</div>
        </Link>
      </div>
      <div>
      <Link to={"/foronoticias/" + idnoticia[3]}>
         {/* eslint-disable-next-line */}
         <img src={`${REACT_APP_BACK_BASE_URL}/` + imagenes[3]} alt="travel image" className="image"/>
         {/* eslint-disable-next-line */} 
         <div className="centrado">{titulo[3]}</div>
        </Link>
      </div>
    </Slider>

  )
    };
export default Carrusel;