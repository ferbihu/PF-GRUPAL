import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../actions/actions';
import CarruselCards from './CarruselCards';
import "./CarruselPortada.css"
const { REACT_APP_BACK_BASE_URL } = process.env


function CarruselPortada() {
  const allNews = useSelector((state) => state.news);
  console.log(allNews)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className="fondo-carrusel">
      {allNews &&
        allNews.map((i) => {
          console.log(i.image)
          return (
            <div key={i.id}>
              <Link to={"/ForoNoticias/" + i.id}>
                <CarruselCards
                  title={i.title}
                  image={`${REACT_APP_BACK_BASE_URL}/` + i.image}
                  date={i.date}
                  key={i.id}
                ></CarruselCards>
              </Link>
            </div>
          );
        })}
    </div>
  )
}

export default CarruselPortada