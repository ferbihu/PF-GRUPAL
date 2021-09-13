import React from "react";
import "./Sities.css";
import {Map} from "../../Components/Mapa/Map";
import {Link} from 'react-router-dom';

export default function Sities() {
    return (
    <div>
      <div className="app-container">
            <div className="app-header">
                <div className="app-header">
                  <span className="app-icon"></span>
                    <p className="app-name">YOUR SAFETY</p>
                    <div className="search-wrapper">
                        <input className="search-input" type="text" placeholder="Search"/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="app-search" viewBox="0 0 24 24">
                            <defs></defs>
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="M21 21l-4.35-4.35"></path>
                        </svg>
                    </div>
                </div>    
                <div className="app-header">
                    <button className="notification-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                    </button>

            </div>
                <button className="messages-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
            </button>
            </div>
            <div className="app-content">
                
                           <div>
                #
                      <div className="mapa">
                          <Map/>
                          <Link to='/registratelugarseguro'><button className="btnainput">Registrá un lugar seguro</button></Link>
                      </div>
                      
                </div>

                <div>
                <div className="messages-section">
               <button className="messages-close">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x-circle">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </button>
                <div className="projects-section-header">
                   <p>Comentarios</p>
                </div>
                <div className="messages">
                    <div className="message-box">
                    <img className="imagebox" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image"/>                        
                    <div className="message-content">
                    <div className="message-header">
                        <div className="name">Lorena</div>
                           <div className="star-checkbox">
                             <input type="checkbox" id="star-1"/>
                                <label for="star-1">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                   </svg>
                                </label>
                            </div>
                        </div>
                         <p className="message-line">
                           Gente muy amable. Te cuidan en todo momento aun cuando no vayas por algun tema en especial 
                         </p>
                         <p className="message-line time">
                           Dec, 12
                         </p>
                    <div className="message-box">
                    <img className="imagebox"src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="profile image"/>
                      <div className="message-content">
                         <div className="message-header">
                            <div className="name">Marcos</div>
                            <div className="star-checkbox">
                                <input type="checkbox" id="star-2"/>
                                <label for="star-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                </label>
                            </div>
                         </div>
                         <p className="message-line">
                           Hola, tienen mucha amabilidad coordial y atentos.
                        </p>
                        <p className="message-line time">
                           Dec, 12
                        </p>
                      </div>
                    </div>
                    </div>
                    </div>
                </div>
                
            </div>
                </div>
            </div>
            <div className="projects-section">
          <div className="projects-section-header">
               <p>Lugares</p>
               <p className="time">Septiembre, 12</p>
               <div className="view-actions">
                   <button className="view-btn list-view" title="List View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-list">
                            <line x1="8" y1="6" x2="21" y2="6" />
                            <line x1="8" y1="12" x2="21" y2="12" />
                            <line x1="8" y1="18" x2="21" y2="18" />
                            <line x1="3" y1="6" x2="3.01" y2="6" />
                            <line x1="3" y1="12" x2="3.01" y2="12" />
                            <line x1="3" y1="18" x2="3.01" y2="18" />
                        </svg>
                    </button>
                    <button className="view-btn grid-view active" title="Grid View">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-grid">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </button>
          </div>
          </div>
          <div className="projects-section-line">
             <div className="projects-status">
                   <div className="item-status">
                     <span className="status-number">10</span>
                     <span className="status-type">In Caba</span>
                   </div>
                   <div className="item-status">
                     <span className="status-number">50</span>
                     <span className="status-type">Buenos Aires</span>
                  </div>
                  <div className="item-status">
                        <span className="status-number">120</span>
                        <span className="status-type">Total Argentina</span>
                  </div>
             </div>
         
          </div> 
      </div>
            <div className="jsGridView">
            <div className="project-box-wrapper">
               <div className="project-box">
                  <div className="project-box-header">
                    <span>December 10, 2020</span>
                    <div className="more-wrapper">
                           <button className="project-btn-more">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                                 <circle cx="12" cy="12" r="1" />
                                 <circle cx="12" cy="5" r="1" />
                                 <circle cx="12" cy="19" r="1" />
                              </svg>
                           </button>
                    </div>
                  </div>
               </div>
               <div className="project-box-content-header">
                  <p className="box-content-header">El Gato Negro</p>
                  <p className="box-content-subheader">CABA</p>
               </div>
               <div className="box-progress-wrapper">
                  <p className="box-progress-header">Recomendacion</p>
                    <div className="box-progress-bar">
                      <span className="box-progress"></span>
                    </div>
                  <p className="box-progress-percentage">80%</p>
               </div>
               <div className="project-box-footer">
                <div className="participants">
                    <img className="imagebox"src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="participant"/>
                    <img className="imagebox"src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="participant"/>
                    <button className="add-participant">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
                <div className="days-left">
                 2 Days Left
                </div>
           </div>
           </div>
            <div className="project-box-wrapper">
               <div className="project-box">
                <div className="project-box-header">
                    <span>December 10, 2020</span>
                    <div className="more-wrapper">
                           <button className="project-btn-more">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical">
                                 <circle cx="12" cy="12" r="1" />
                                 <circle cx="12" cy="5" r="1" />
                                 <circle cx="12" cy="19" r="1" />
                              </svg>
                           </button>
                    </div>
                  </div>
                  <div className="project-box-content-header">

                     <p className="box-content-header">Museo Ciudad</p>
                     <p className="box-content-subheader">CABA</p>
                  </div>
                  <div className="box-progress-wrapper">
                    <p className="box-progress-header">Recomendacion</p>
                      <div className="box-progress-bar">
                           <span className="box-progress"></span>
                      </div>
                    <p className="box-progress-percentage">75%</p>
                  </div>
                  <div className="project-box-footer">
                    <div className="participants">
                           <img className="imagebox" src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80" alt="participant"/>
                           <img className="imagebox" src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80" alt="participant"/>
                           <button className="add-participant">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus">
                                 <path d="M12 5v14M5 12h14" />
                              </svg>
                           </button>
                    </div>
                    <div className="days-left">
                      2 Days Left
                    </div>
                  </div>
                 </div>
                </div>    
           
            
            </div>
            
     </div> 
    </div>
    )
}