import React,{useState} from "react";
import "./Carrusel.css"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight, FaSleigh} from "react-icons/fa"
import { slides } from "./carruseldata";

import Slider from 'infinite-react-carousel';

const Carrusel = () => {
    return (
      <Slider autoplay={true} autoplaySpeed={3000} dots>
      <div className='slider'>
      <img src={slides[0].image} alt="travel image" className="image"/>
      </div>
      <div>
      <img src={slides[1].image} alt="travel image" className="image"/>
      </div>
      <div>
      <img src={slides[2].image} alt="travel image" className="image"/>
      </div>
      <div>
      <img src={slides[3].image} alt="travel image" className="image"/>
      </div>
      <div>
      <img src={slides[4].image} alt="travel image" className="image"/>
      </div>
    </Slider>
      );
    };
export default Carrusel;