// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import {filterSafePlacesById} from "../actions/actions";
// import MySafePlace from "../Components/PlaceAprobation/MyPlaceSafe";

// export default function PerfilSafePlace() {
//     const dispatch = useDispatch();
//     const safeplace = useSelector((state) => state.filtered_safePlaces);
//     const userId = useSelector((state)=> state.userId);
//     useEffect(() => {
//         dispatch(filterSafePlacesById(userId));  
//       }, [userId, dispatch]);
//     return (
//         <div>
//             <h1>Mis lugares seguros</h1>
                 
//       <div>
//         {safeplace &&
//           safeplace.map((i) => {
//             return (
//             <div key={i.id}>  
//                 <MySafePlace
//                   name={i.name}
//                   country={i.country}
//                   town={i.town}
//                   telephone={i.telephone}
//                   mail={i.mail}
//                   street={i.street}
//                   postcode={i.postcode}
//                   number={i.number}
//                   keyword={i.keyword}
//                   relation={i.relation}
//                   key={i.id}
//                ></MySafePlace>
//                </div>
//            );
//           })}
//       </div>
//         </div>
//     )
// }