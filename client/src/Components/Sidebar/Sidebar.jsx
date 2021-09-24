
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi"
import { Link } from "react-router-dom";
 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

import { changePopupState, changePopupStateWarning } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
// import ShowCommentsPlaces from "./Comments";
import { showCommentsSafePlaces } from "../../actions/actions";
import PopupsComment from "./PopUpComent";


export default function Sidebar({ id, name, telephone, street, number, keyword, handleMarkerClick }) {

 
  const [menuCollapse, setMenuCollapse] = useState(false)
  
  const dispatch = useDispatch();


  function HandleCommentClick() {
    dispatch(changePopupState())

  }
  function HandleWarningClick() {
    dispatch(changePopupStateWarning())

  }

  const comments = useSelector((state) => state.comments_safeP)
  const filterId = comments.filter((c) => c.safePlaceId === id)

  useEffect(() => {
      dispatch(showCommentsSafePlaces(id))
    }, 
    // eslint-disable-next-line
    [showCommentsSafePlaces])


  const state_popup_warning2 = useSelector(state => state.popup_warning)
  const state_popup2 = useSelector(state => state.popup)
  const logeado = localStorage.getItem("isLogged")



  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  <PopupsComment id={id} />

  return (
    <>
    <div>
      <div className="scroll-side">
        <div  className="contenedorsidebar" collapsed={menuCollapse}>
            <div className="logotext">
              <button className="btnSide" onClick={() => handleMarkerClick(false)}>x</button>
              <p className="princip">{name}</p>
              <div className="titleLine"></div>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
            
            </div>
            <br />
            <br />
            <div className="txtyicon">
            <FaPhoneAlt className="icono"/> 
            <h3 className="txt1">{telephone}</h3>
            </div>
            <br />
            <div className="txtyicon2">
            <HiLocationMarker  className="icono"/>
            <h3 className="txt1">{street} {number}</h3>
            </div>
            <div className="cont">
              <h2 className="kw">Palabra clave:</h2>
              <h2 className="keyword">{keyword}</h2>
            </div>
            {logeado === "true" ? 
              <div className="cont-denuncia">
              <div className="sidebar-align">
              <h3 className="denunciaTit"> Este no es un lugar seguro?</h3>
              <button className="denuncia" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleWarningClick()} >Denuncialo</button>
            </div></div> : <div className="denuncia"><Link to="/iniciasesion">  Iniciá sesión para denunciar el lugar</Link></div>}

            {logeado === "true" ? 
            <div className="cont-res">
            <button className="btnRes" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleCommentClick()}>Dejar una reseña</button>
            </div>
              : <div className="comentario"><Link to="/iniciasesion">Iniciá sesión para dejar tu reseña!</Link></div>}
                      <div>
                        <div className="comm-scrll">
            {
                filterId?.map((c) => {
                    return (
                      <div>
                      <div key={c.id} value={c.id} className="commentsCont">
                        <p key={c.id} value={c.id} className="conte">{c.comment_text}</p>
                      </div>
                      </div>
                    )
                  })
                }
                </div>
        </div>
        </div>
      </div>
      </div>
    </>

  );
};
