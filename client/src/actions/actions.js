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
  

  export default addUser;


  export function renderUserName(payload){
    console.log("entro a la action : ", payload)
    return {
        
        type: "RENDER_USER_NAME",
        payload
    }
    
}
