const initialState = {
  safeplce: [],
  user: [],
  role: [],
  isLogged: false,
  userId: null,
  stateSitie: [],
  filtered_safePlaces: [],
  allSafePlacesPanel: [],
  userData: []
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
        safeplce: action.payload
      }
    case "BY_TOWN":
      return {
        ...state,
        safeplce: action.payload
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
        userId: action.payload.userId,

        userData: action.dataUser,

        role: action.payload.role

      }

    case "ALL_SITIES":
      return {
        ...state,
        filtered_safePlaces: action.payload.info, //recipes
        stateSitie: action.payload.info,          //allRecipes

      };
    /* case "FILTER_BY_COUNTRY":
      let lugares = state.stateSitie;
      let statusFiltered = lugares.filter(e => e.country.includes(action.payload))
      return {

        ...state,
        filtered_safePlaces: statusFiltered
      }; */
    case "FILTER_BY_STATUS":
      let lugares = state.allSafePlacesPanel
      let statusFiltered = lugares.filter(e => e.status.includes(action.payload))
      return {
        ...state,
        filtered_safePlaces: statusFiltered
      };

    case "DELETE_SAFEPLACE":
      return {
        ...state,
        isLogged: true,
        userId: action.payload.userId
      }
    case "GET_SAFEPLACE_PANEL":
      return {
        ...state,
        filtered_safePlaces: action.payload, //recipes
        allSafePlacesPanel: action.payload  //allrecipes

      }
    case "ACCEPTED_STATUS":
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default reducers;