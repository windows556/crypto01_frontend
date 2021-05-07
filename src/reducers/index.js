import { combineReducers } from "redux";
import { symbolReducer } from "./addHoldingReducers";
import { authReducer } from "./reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  symbolStore: symbolReducer
});
