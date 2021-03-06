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



export function login({ email, password }) {
  return function(dispatch){
  const user = {  email, password };
  return axios.post(`${REACT_APP_BACK_BASE_URL}/auth/login`, user)
    .then(res => {
      //aca guardamos el token obtenido de backend
      localStorage.setItem('token',res.data.id_token)
      localStorage.setItem('userId',res.data.userId)
      localStorage.setItem('isLogged',true)
      return dispatch({
        type:'LOGIN',

        payload:{userId:res.data.userId},
        dataUser: user,

        payload2:res.data.role

      })
    })
    .catch(err => {
      console.error(err)
      return dispatch({
        type:'LOGGIN_ERROR',
        payload: {error: true}
      })
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
      })
      
    } catch (error) {
      console.log(error)
      
    }
         
}}

//CAMBIA STATUS A REJECTED
export function rejectedStatus(id, payload){
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
    axios.patch(`${REACT_APP_BACK_BASE_URL}/user/${id}`, updateData,config).then((res) =>
      dispatch({
        type: "UPDATE_DATA_USER",
        payload: res.data,
      })
    );
  };
};

export function getUserById(id){
  return function(dispatch){
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    // eslint-disable-next-line
    const response = axios.get(`${REACT_APP_BACK_BASE_URL}/user/${id}`,config)
    .then((response)=>{
      dispatch({
        type :"USER_DATA",
        payload :response.data
      })
    }
    ).catch((err)=>{
      console.log(err)
    })
  }
};

export function changeSidebarState(payload){
  return {
      type: "UPDATE_SIDEBAR_STATE",
      payload
  }
}
export function changePopupState(payload){
  return {
      type: "UPDATE_POPUP_STATE",
      payload
  }
}

export function changePopupStateWarning(payload){
  return {
      type: "UPDATE_POPUP_STATE_WARNING",
      payload
  }
}

export function closePopup(payload){
  return {
      type: "CLOSE_POPUP",
      payload
  }
}

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

export function getCommentNotice(id){
  return function(dispatch){
    return axios
     .get(`${REACT_APP_BACK_BASE_URL}/comments/${id}`)
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

export async function uploadImage(image) {
  const fd = new FormData();
  fd.append('image', image);
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }
  try {
    // eslint-disable-next-line
    const resp = await axios.post(`${REACT_APP_BACK_BASE_URL}/images`, fd, config);
  } catch(err) {
    console.log(err)
  }

}
export function getNews(){
  return function(dispatch){
    return axios
     .get(`${REACT_APP_BACK_BASE_URL}/newNotice/news`)
     .then((res)=>{dispatch({ 
          type:"GET_NEWS",
          payload:{info:res.data}})
     })
     .catch((err) => {
       console.log(err);
    });
};
}
export function getNewsById(id){
  return function(dispatch){
    return axios
     .get(`${REACT_APP_BACK_BASE_URL}/newsById/${id}`)
     .then((res)=>{dispatch({ 
          type:"GET_NEWS_BY_ID",
          payload:{info:res.data}})
     })
     .catch((err) => {
       console.log("Falla servidor local", err);
    });
};
}

export function getHealth() {
  return async function(dispatch) {
    const res = await axios.get(`${REACT_APP_BACK_BASE_URL}/profession/get_profession`)
    return dispatch({
      type: 'GET_HEALTH',
      payload: res.data
    });
  };
};

export function getHealthByName(name) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${REACT_APP_BACK_BASE_URL}/profession/get_profession/${name}`)
    return dispatch({
      type: 'HEALT_BY_NAME',
      payload: res.data
    })
    } catch (err) {
      console.log(err);
    }
    
  };
};

export function postHealth(payload,userId) {
  return async function(dispatch) {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}`, 'Content-Type': 'application/json' }
    };
    const res = await axios.post(`${REACT_APP_BACK_BASE_URL}/profession` ,{...payload, userId} , config)
    return {
      type: 'POST_HEALTH',
      res
    };
  };
};   

export function byEspecialidades(payload) {
  return function(dispatch) {
    dispatch({
      type: 'BY_ESPECIALIDAD',
      payload
    })
  };
};

