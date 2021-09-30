import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../actions/actions';
import CarruselCards from './CarruselCards';
import "./CarruselPortada.css"
const { REACT_APP_AMAZON_S3 } = process.env


function CarruselPortada() {
  const allNews = useSelector((state) => state.news);
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
                  image={`${REACT_APP_AMAZON_S3}/` + i.image}
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