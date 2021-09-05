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
          const allSafeplace = state.safeplace;
          const countrysFilter = action.payload === 'All' ? allSafeplace :
          allSafeplace.filter(i => i.status === action.payload)
          return {
              ...state,
              safeplce: countrysFilter
          }
        default:
      return state;
  }
}

export default reducers;