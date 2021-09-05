import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getSafeplace} from ".././actions/actions";
import PlaceAprobation from "../Components/PlaceAprobation/PlaceAprobation";

export default function Aprobation() {
    const dispatch = useDispatch();
    const safeplace = useSelector((state) => state.safeplace);
    useEffect(() => {
        dispatch(getSafeplace());
      
      }, [dispatch]);
    return (
        <div>
            <h1>Aprobación de formularios</h1>
                 
      <div>
        {safeplace &&
          safeplace.map((i) => {
            return (
            <div key={i.id}>  
                <PlaceAprobation
                  name={i.name}
                  lastname={i.lastname}
                  country={i.country}
                  town={i.town}
                  telephone={i.telephone}
                  mail={i.mail}
                  street={i.street}
                  number={i.number}
                  keyword={i.keyword}
                  relation={i.relation}
                  key={i.id}
               ></PlaceAprobation>
               </div>
           );
          })}
      </div>
        </div>
    )
}