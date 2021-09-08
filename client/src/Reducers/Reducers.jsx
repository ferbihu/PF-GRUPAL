const initialState = {
  safeplce: [],
  user: [],
  isLogged: false,
  userId: null,
  stateSitie: [],
  filtered_safePlaces: [],
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
    case "ALL_SITIES":
      return {
        ...state,
        filtered_safePlaces: action.payload.info, //recipes
        stateSitie: action.payload.info,          //allRecipes

      };
    case "FILTER_BY_COUNTRY":
      const lugares = state.stateSitie;
      const statusFiltered = lugares.filter(e => e.country.includes(action.payload))

      return {
       ...state,
        filtered_safePlaces: statusFiltered

      }
     default:
      return state;
  }
}

export default reducers;