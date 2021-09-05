const initialState = {
   safeplce:[],
  };
function reducers(state = initialState, action) {
    switch (action.type) {
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
}

export default reducers;