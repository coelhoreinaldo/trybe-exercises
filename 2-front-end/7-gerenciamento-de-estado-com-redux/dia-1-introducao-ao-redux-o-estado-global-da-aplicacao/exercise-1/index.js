import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR' && state.index < colors.length:
      { index: state.index + 1 }
      break;

    case 'PREVIOUS_COLOR' && state.index > 0:
      { index: state.index - 1 }
      break;

    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools)