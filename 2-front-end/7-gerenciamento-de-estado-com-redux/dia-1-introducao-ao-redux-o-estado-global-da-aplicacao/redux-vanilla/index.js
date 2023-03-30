import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = { count: 0 }

const reducer = (state = INITIAL_STATE, action) => {
  if(action.type === "INCREMENT_COUNTER") {
    return { count: state.count + 1 }
  }
  return state;
}

const store = createStore(reducer, composeWithDevTools());

const action = { type: "INCREMENT_COUNTER" };

const incrementButton = document.querySelector('button');
incrementButton.addEventListener('click', () => {
  store.dispatch(action);
})