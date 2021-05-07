import axios from "axios";

export const LOGIN_SUCCESS_ACTION = "LOGIN_SUCCESS_ACTION";
export const LOGIN_FAILURE_ACTION = "LOGIN_FAILURE_ACTION";
export const LOGOUT_NOW_ACTION = "LOGOUT_NOW_ACTION";

function loginSuccessActionCreator() {
  return {
    type: LOGIN_SUCCESS_ACTION
  };
}

function loginFailureActionCreator(message) {
  return {
    type: LOGIN_FAILURE_ACTION,
    message: message
  };
}

function logoutSuccessActionCreator() {
  return {
    type: LOGOUT_NOW_ACTION
  };
}

export function loginUserThunk(email, password) {
  return dispatch => {
    return axios
      .post(`${process.env.REACT_APP_API_SERVER}/login`, {
        email: email,
        password: password
      })
      .then(response => {
        if (response.data == null) {
          dispatch(loginFailureActionCreator("Unknown Error"));
        } else if (!response.data.token) {
          dispatch(
            loginFailureActionCreator(response.data.message || "No Token!")
          );
        } else {
          localStorage.setItem("token", response.data.token);
          dispatch(loginSuccessActionCreator());
        }
      })
      .catch(err => console.log("Error: ", err));
  };
}

export function logoutUserThunk() {
  return dispatch => {
    dispatch(logoutSuccessActionCreator());
  };
}
