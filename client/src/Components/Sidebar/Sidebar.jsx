//import useState hook to create menu collapse state
import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi"


import "react-pro-sidebar"
//import react pro sidebar components
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import icons from "react-icons";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";


// import sidebar css from "react-pro-sidebar module and our custom css";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";

import { changePopupState, changePopupStateWarning, getSafePlaceById } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import ShowCommentsPlaces from "./Comments";


export default function Sidebar({ id }) {
  const aPlace = useSelector((state) => state.getDetail);
  console.log(aPlace)
  console.log(id)
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSafePlaceById(id));
  }, [])

  function renderDetail(aPlace) {
    return (
      <div>
       <div id="Sidebar">
         {/* collapsed props to change menu size using menucollapse state */}
         <ProSidebar collapsed={menuCollapse}>
           <SidebarHeader>
             <div className="logotext">
               <button className="btnSide">x</button>
               <p>{aPlace.name}</p>
              <div className="titleLine"></div>
             </div>
             <div className="closemenu" onClick={menuIconClick}>
             </div>
           </SidebarHeader>
           <SidebarContent>
             <br />
             <br />
             <h3 className="txt1"><FaPhoneAlt className="iconnn" /> {aPlace.telephone}</h3>
             <br />
             <h3 className="txt1"><HiLocationMarker className="iconnn" />{aPlace.street} {aPlace.number}</h3>
             <br />
             <div className="cont">
               <h2 className="kw">PALABRA CLAVE</h2>
               <h2 className="txt1">{aPlace.keyword}</h2>
             </div>

             <div className="sidebar-align">
               <h3 className="denunciaTit"> Este no es un lugar seguro?</h3>
               <button className="denuncia" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleWarningClick()} >Denuncialo</button>
             </div>

             <button className="btnRes" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleCommentClick()}>Dejar una reseña</button>
             <ShowCommentsPlaces/>
           </SidebarContent>
         </ProSidebar>
       </div>
      </div>
    )
  }
  const [menuCollapse, setMenuCollapse] = useState(false)
  function HandleCommentClick() {
    dispatch(changePopupState())

  }
  function HandleWarningClick() {
    dispatch(changePopupStateWarning())

  }
  const state_popup_warning2 = useSelector(state => state.popup_warning)
  const state_popup2 = useSelector(state => state.popup)
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <div>
      {aPlace ? renderDetail(aPlace) : <h1>Loading...</h1>}
    </div>
    // <>
    //   <div id="Sidebar">
    //     {/* collapsed props to change menu size using menucollapse state */}
    //     <ProSidebar collapsed={menuCollapse}>
    //       <SidebarHeader>
    //         <div className="logotext">
    //           <button className="btnSide" onClick={() => handleMarkerClick(false)}>x</button>
    //           <p>{name}</p>
    //           <div className="titleLine"></div>
    //         </div>
    //         <div className="closemenu" onClick={menuIconClick}>
    //           {/* changing menu collapse icon on click */}
    //           {/* {menuCollapse ? (
    //             <FiArrowRightCircle />
    //           ) : (
    //             <FiArrowLeftCircle />
    //           )} */}
    //         </div>
    //       </SidebarHeader>
    //       <SidebarContent>
    //         <br />
    //         <br />
    //         <h3 className="txt1"><FaPhoneAlt className="iconnn" /> {telephone}</h3>
    //         <br />
    //         <h3 className="txt1"><HiLocationMarker className="iconnn" />{street} {number}</h3>
    //         <br />
    //         <div className="cont">
    //           <h2 className="kw">PALABRA CLAVE</h2>
    //           <h2 className="txt1">{keyword}</h2>
    //         </div>

    //         <div className="sidebar-align">
    //           <h3 className="denunciaTit"> Este no es un lugar seguro?</h3>
    //           <button className="denuncia" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleWarningClick()} >Denuncialo</button>
    //         </div>

    //         <button className="btnRes" type="submit" disabled={state_popup2 === true || state_popup_warning2 === true} onClick={() => HandleCommentClick()}>Dejar una reseña</button>
    //         <ShowCommentsPlaces/>
    //       </SidebarContent>
    //     </ProSidebar>
    //   </div>
    // </>
  );
};
