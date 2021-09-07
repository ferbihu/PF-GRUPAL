import axios from "axios";


export function addUser({ name, email, password }) {
    return function (dispatch) {
      const user = { name, email, password };
      axios.post('http://localhost:3001/auth/new', user)
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
      const res = await axios.post(" http://localhost:3001/safe_place" , {...payload,userId},config)
      return {
        type: 'POST_SAFEPLACE',
        payload : res
    }
   }
  }
  export function getSafeplace(){
    return async function(dispatch){
      const json = await axios.get("http://localhost:3001/safe_place");
       return dispatch({
       type: 'GET_SAFEPLACE',
       payload: json.data
    })
  }
}
export function byCountrys(payload) {
  return {
      type: 'byCountrys',
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
  return axios.post('http://localhost:3001/auth/login', user)
    .then(res => {
      alert("Loggeado correctamente,userId,token,guardados")  
      //aca guardamos el token obtenido de backend
      localStorage.setItem('token',res.data.id_token)
      return dispatch({
        type:'LOGIN',
        payload:{userId:res.data.userId}
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
         .get(` http://localhost:3001/safe_place`)
         .then((res)=>{dispatch({ 
              type:"ALL_SITIES",
              payload:{info:res.data}})
         })
         .catch((err) => {
           console.log("Falla servidor local", err);
        });
};
}

export const sendMailToNewUsers = (email) => {
  return async function() {
    try {
      console.log(email)
      return axios.post(`http://localhost:3001/email/welcome`, email)
      
    } catch(err) {
      console.log(err.message);
    }
  }
}