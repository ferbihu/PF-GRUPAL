const initialState = {
    user: []

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "RENDER_USER_NAME":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;