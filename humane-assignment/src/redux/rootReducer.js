import initialStore from "../store";
import actions from "./actionConstants";

function rootReducer(state = initialStore, action) {
    switch (action.type) {
        case actions.SET_AUTHENTICATION:
            return { ...state, token: action.payload.token, authenticated: action.payload.authenticated };
        default:
            return { ...state }
    }
}

export default rootReducer;