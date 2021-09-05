import axios from "axios";


export function addUser({ name, email, password }) {
    return function (dispatch) {
      const user = { name, email, password };
      axios.post('http://localhost:3001/auth/createUser', user)
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
      const res = await axios.post("http://localhost:3001/controllers/safeplace" , payload)
      return {
        type: 'POST_SAFEPLACE',
        res
    }
   }
  }
  export function getSafeplace(){
    return async function(dispatch){
      const json = await axios.get("http://localhost:3001/controllers/safeplace");
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
