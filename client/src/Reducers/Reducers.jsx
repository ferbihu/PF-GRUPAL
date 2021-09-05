const initialState = {
   safeplce:[],
   user: []
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
        case "ByCountrys":
          return {
              ...state,
          }
        default:
      return state;
  }

export default rootReducer;