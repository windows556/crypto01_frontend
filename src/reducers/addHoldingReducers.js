import { GET_SYMBOLS_ACTION } from "../actions/addHoldingActions";

const initialState = {
  symbolsReducer: []
};

export const symbolReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SYMBOLS_ACTION:
      return { symbolsReducer: state.symbolsReducer.concat([action.symbolsArray]) };

    default:
      return state;
  }
};