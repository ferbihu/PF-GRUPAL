
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi"
import { Link } from "react-router-dom";




import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
 
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

import { changePopupState, changePopupStateWarning } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import ShowCommentsPlaces from "./Comments";
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

  const state_popup_warning2 = useSelector(state => state.popup_warning)
  const state_popup2 = useSelector(state => state.popup)
  const logeado = useSelector(state => state.logeado)



  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  <PopupsComment id={id} />

  return (
    <>
    <div className="contenedorsidebar">
      <div id="Sidebar">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <button className="btnSide" onClick={() => handleMarkerClick(false)}>x</button>
              <p>{name}</p>
              <div className="titleLine"></div>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {/* changing menu collapse icon on click */}
            
            </div>
          </SidebarHeader>
          <SidebarContent>
            <br />
            <br />
            <h3 className="txt1"><FaPhoneAlt className="iconnn" /> {telephone}</h3>
            <br />
            <h3 className="txt1"><HiLocationMarker className="iconnn" />{street} {number}</h3>
            <br />
            <div className="cont">
              <h2 className="kw">PALABRA CLAVE</h2>
              <h2 className="txt1">{keyword}</h2>
            </div>
            {logeado === "true" ? <div className="sidebar-align">
              <h3 className="denunciaTit"> Este no es un lugar seguro?</h3>
              <button className="denuncia" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleWarningClick()} >Denuncialo</button>
            </div> : <div className="denunciar"><Link to="/iniciasesion">  Iniciá sesión para denunciar el lugar</Link></div>}

            {logeado === "true" ? <button className="btnRes" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleCommentClick()}>Dejar una reseña</button>
              : <div className="comentario"><Link to="/iniciasesion">Iniciá sesión para dejar tu reseña!</Link></div>}

         

            <ShowCommentsPlaces id={id} />

          </SidebarContent>
        </ProSidebar>
      </div>
      </div>
    </>

  );
};
