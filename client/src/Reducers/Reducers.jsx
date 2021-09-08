const initialState = {
   safeplce:[],
   user: [],
   isLogged:false,
   userId:null
  };
function reducers(state = initialState, action) {
    switch (action.type) {
       case "RENDER_USER_NAME":
          return {
            ...state,
           user: action.payload
            }
      case "POST_SAFEPLACE":
        return {
          ...state,
        };
        case "BY_COUNTRYS":
          return {
              ...state,
          }
        case "LOG_OUT_GOOGLE":
          return {
            ...state,
            user: state.user = []
          }
          case "LOGIN":
          return {
            ...state,
            isLogged: true,
            userId:action.payload.userId
          }
          case "DELETE_SAFEPLACE":
          return {
            ...state,
            isLogged: true,
            userId:action.payload.userId
            }
  
        default:
      return state;
  }
}

export default reducers;