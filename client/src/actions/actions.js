import axios from "axios";
const{ REACT_APP_BACK_BASE_URL} = process.env

export function addUser({ name, email, password }) {
    return function (dispatch) {
      const user = { name, email, password };
      axios.post(`${REACT_APP_BACK_BASE_URL}/auth/new`, user)
        .then(res => dispatch({
          type: 'ADD_USER',
          payload: res.data
        })
        ).catch(err => {
          console.error(err)
        });
    }
  }


  export function postAprobation(payload,userId){ //le paso un payload ya que trae data
    return async function(dispatch){
//esta es la manera que se envia el token al backend,se obtiene desde localStorage
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
      };
      
      const res = await axios.post(`${REACT_APP_BACK_BASE_URL}/safe_place` , {...payload,userId},config)
      return {
        type: 'POST_SAFEPLACE',
        payload : res
    }
   }
  }
  export function getSafeplace(){
    return function(dispatch){
      return axios
       .get(`${REACT_APP_BACK_BASE_URL}/safe_place`)
       .then((res)=>{dispatch({ 
            type:"GET_SAFEPLACE",
            payload:{info:res.data}})
       })
       .catch((err) => {
         console.log("Falla servidor local", err);
      });
};

}
export function byCountrys(payload) {
  return {
      type: 'BY_COUNTRYS',
      payload
  };
};
export function byTown(payload) {
  return {
      type: 'BY_TOWN',
      payload
  };
};

  export function renderUserName(payload){
    console.log("entro a la action : ", payload)
    return {
        
        type: "RENDER_USER_NAME",
        payload
    }
}

export function logOutGoogle(payload) {
  return {
    type: "LOG_OUT_GOOGLE",
    payload
  }
}


export function login({ email, password }) {
  return function(dispatch){
  const user = {  email, password };
  //console.log(user);
  return axios.post(`${REACT_APP_BACK_BASE_URL}/auth/login`, user)
    .then(res => {
      alert("Loggeado correctamente,userId,token,guardados")  
      //aca guardamos el token obtenido de backend
      localStorage.setItem('token',res.data.id_token)
      return dispatch({
        type:'LOGIN',

        payload:{userId:res.data.userId},
        dataUser: user,

        payload2:{userId:res.data.userId, role:res.data.role}

      })
    })
    .catch(err => {
        alert("Usuario o password invalido")
      console.error(err)
    })
  }
}
export const getallsafesitie = ()=>{
 
  return function(dispatch){
        return axios
         .get(`${REACT_APP_BACK_BASE_URL}/safe_place`)
         .then((res)=>{dispatch({ 
              type:"ALL_SITIES",
              payload:{info:res.data}})
         })
         .catch((err) => {
           console.log("Falla servidor local", err);
        });
};
}


//Para filtrado por paises en el panel de Admin
export function filterByCountry(payload){
  return {
      type: "FILTER_BY_COUNTRY",
      payload
  }
}
   
export const sendMailToNewUsers = (user) => {
  return async function(dispatch) {
    try {
      console.log(user)
      return axios.post(`${REACT_APP_BACK_BASE_URL}/email/welcome`, user)
      
    } catch(err) {
      console.log(err.message);
    }

  }
}
export function deleteSafePlace(payload,userId){
  return async function(dispatch){
    const json = await axios.get(`${REACT_APP_BACK_BASE_URL}/delete_safe_place` , {...payload,userId} );
    return dispatch({
      type: 'DELETE_SAFEPLACE',
      payload: json.data
   })
  }
}

export function coordenadas(payload) {
  return {
      type: 'COORDENADAS',
      payload
  };
};


export function filterPlacesByStatus(payload){
  return {
      type: "FILTER_BY_STATUS",
      payload
  }
}


//GET TODOS LOS LUGARES SEGUROS (ACCEPTED-PENDING-WARNING-REJECTED)
export function getSafePlacePanel(){
  console.log("------------------- >entro a get safe places panel")
  return async function(dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    const json = await axios.get(`${REACT_APP_BACK_BASE_URL}/safe_place/admin/all_safe_place`, config);
     return dispatch({
     type: 'GET_SAFEPLACE_PANEL',
     payload: json.data
  })
}
}

//CAMBIA EL STATUS A ACCEPTED

export function acceptedStatus(id){
  return async function (dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    try {
      const response = await axios.post(`${REACT_APP_BACK_BASE_URL}/safe_place/${id}/accepted`, {}, config)
      return dispatch ({
        type: "ACCEPTED_STATUS",
        payload: response,
      }, alert("aceptado"))
      
    } catch (error) {
      console.log(error)
      
    }
         
}}

//CAMBIA STATUS A REJECTED
export function rejectedStatus(id, payload){
  //console.log("hola action rejected")
  return async function (dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    try {
      const response = await axios.post(`${REACT_APP_BACK_BASE_URL}/safe_place/${id}/rejected`, {description_status: payload}, config)
      return dispatch ({
        type: "REJECTED_STATUS",
        payload: response
      })
    } catch (error) {
      console.log(error)
      
    }
         
}}
export function filterSafePlacesById(payload, userId){
  return async function (dispatch){
    const json = await axios.get(`${REACT_APP_BACK_BASE_URL}/safe_place/admin/all_safe_place`,  {...payload,userId});
    return dispatch({
      type: 'FILTER_SAFEPLACE_BY_ID',
      payload: json.data
   })
  }
}

export function updateDataUser(id, data) {
  return function  (dispatch) {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    const updateData = { id, data };
    console.log(updateData)
    axios.patch(`${REACT_APP_BACK_BASE_URL}/user/${id}`, updateData,config).then((res) =>
      dispatch({
        type: "UPDATE_DATA_USER",
        payload: res.data,
      })
    );
  };
}


export function changePopupState(payload){
  console.log("entro a la action change popup")
  return {
      type: "UPDATE_POPUP_STATE",
      payload
  }
}

export function changePopupStateWarning(payload){
  console.log("entro a la action change popup warning")
  return {
      type: "UPDATE_POPUP_STATE_WARNING",
      payload
  }
}

export function closePopup(payload){
  console.log("entro a la action change popup warning")
  return {
      type: "CLOSE_POPUP",
      payload
  }
}
//para el administrar usuarios
export function getUsers() {
  return async function(dispatch) {
    try {
        const res = await axios.get(`${REACT_APP_BACK_BASE_URL}/user/all/users`)
        return dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    };
  };
}

export function getUsersByName(name) {
  return async function(dispatch) {
    try {
        const res = await axios.get(`${REACT_APP_BACK_BASE_URL}/user/all/users?name=${name}`)
        return dispatch({
            type: "USERS_NAME",
            payload: res.data
        })
    } catch (err) {
        console.log(err)
    };
  };
}

//CAMBIAR EL ROL A ADMIN
export function changeRoleToAdmin(id, payload){
  //console.log("hola action CHANGE ROL TO ADMIN")
  console.log(id, payload, "action change rol to admin")
  return async function (dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    try {
      const response = await axios.put(`${REACT_APP_BACK_BASE_URL}/user/admin/${id}/${payload}`, {}, config)
      
      return dispatch ({
        type: "CHANGE_ROL",
        payload: response
      })
    } catch (error) {
      console.log(error)
      
    }
         
}}

export function showCommentsSafePlaces() {
  return function(dispatch) {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    axios.get(`${REACT_APP_BACK_BASE_URL}/safe_place/all_comments`, config)
    .then(resp => {
      dispatch({
        type: "GET_COMMENTS_SP",
        payload: resp.data
      })
    })
  }
}
//comentarios noticias

export function getCommentNotice(){
  return function(dispatch){
    return axios
     .get(`${REACT_APP_BACK_BASE_URL}/comments`)
     .then((res)=>{dispatch({ 
          type:"GET_COMMENT_NOTICE",
          payload:{info:res.data}})
     })
     .catch((err) => {
       console.log("Falla servidor local", err);
    });
};
}

export function postCommentNotice(payload,userId,noticeId){ 
  return async function(dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    
    const res = await axios.post(`${REACT_APP_BACK_BASE_URL}/comments` , {...payload,userId,noticeId},config)
    return {
      type: 'POST_COMMENT_NOTICE',
      payload : res
  }
 }
}
export function getNews(id){
  return function(dispatch){
    return axios
     .get(`${REACT_APP_BACK_BASE_URL}/newNotice/news`, {id})
     .then((res)=>{dispatch({ 
          type:"GET_NEWS",
          payload:{info:res.data}})
     })
     .catch((err) => {
       console.log("Falla servidor local", err);
    });
};
}

export function postNew(payload,userId){ 
  return async function(dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    
    const res = await axios.post(`${REACT_APP_BACK_BASE_URL}/user/admin` , {...payload,userId},config)
    return {
      type: 'POST_NEW',
      payload : res
  }
 }
}