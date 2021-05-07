import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { authReducer } from "./reducers/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";

// const rootReducer = combineReducers({
//     auth: authReducer
// });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const createReduxStore = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(logger), applyMiddleware(thunk))
);
