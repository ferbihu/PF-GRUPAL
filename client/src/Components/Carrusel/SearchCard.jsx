import { Link } from 'react-router-dom';
import React,{ useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getNews} from '../../actions/actions';
import CarruselCards from './CarruselCards';
import {useParams} from 'react-router-dom';
import FailedSearch from '../ForoNoticias/FailedSearch';
const{ REACT_APP_BACK_BASE_URL} = process.env


function SearchCard(props) {

    const {frase} = useParams();
    console.log(frase)

    const allNoti = useSelector((state) => state.news);
    console.log(allNoti)
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getNews());
    }, [dispatch]);
  

  const [idnot, setIdnot] = useState(0)
  
  let arrayfilter=[];

   allNoti.map((nuevo)=>{

         if(nuevo.title.includes(frase)){
          arrayfilter.push(nuevo);
         }
    })
  let ban=false;
  if(arrayfilter.length>0){
      ban=true;
  }
 
    return (
            <div>
            {ban?
                    arrayfilter.map((i) => {
                            return (
                            <div key={i.id}>
                                <Link  to={"/ForoNoticias/" + i.id}>
                                    <CarruselCards
                                        title={i.title}
                                        image={`${REACT_APP_BACK_BASE_URL}/` + i.image}
                                        date={i.date}
                                        key={i.id}
                                    ></CarruselCards>    
                                </Link> 
                            </div>
                        );
                        }):
                       <FailedSearch>
                    </FailedSearch>}       
            </div>
    )
}

export default SearchCard