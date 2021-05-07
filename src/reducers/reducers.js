import {
    LOGIN_SUCCESS_ACTION,
    LOGIN_FAILURE_ACTION,
    LOGOUT_NOW_ACTION
} from "../actions/actions";

const initialState = {
    isAuthenticated: false || localStorage.getItem("token") != null
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS_ACTION:
            return Object.assign({}, state, {
                isAuthenticated: true
            });
        case LOGIN_FAILURE_ACTION:
            return state;
        case LOGOUT_NOW_ACTION:
            return Object.assign({}, state, {
                isAuthenticated: false
            });
        default:
            return state;
    }
}