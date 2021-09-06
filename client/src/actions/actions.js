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
  export function postAprobation(payload){ //le paso un payload ya que trae data
    return async function(dispatch){
      const res = await axios.post(" http://localhost:3001/safe_place" , payload)
      return {
        type: 'POST_SAFEPLACE',
        res
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
      type: 'Countrys',
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