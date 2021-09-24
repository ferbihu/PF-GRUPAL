import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from '../../actions/actions';
import CarruselCards from './CarruselCards';
import { useParams } from 'react-router-dom';
import "./SearchCard.css"
const { REACT_APP_BACK_BASE_URL } = process.env


function SearchCard(props) {

    const { frase } = useParams();
    const allNoti = useSelector((state) => state.news);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getNews());
    }, [dispatch]);

    let arrayfilter = [];
    // eslint-disable-next-line
    allNoti.map((nuevo) => {

        if (nuevo.title.includes(frase)) {
            arrayfilter.push(nuevo);
        }
    })
    return (
        <div className="container-searchcard">
            {arrayfilter &&
                arrayfilter.map((i) => {
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

export default SearchCard