import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = { count: 0 }
const reducer = (state = INITIAL_STATE, action) => {
  return state;
}

const store = createStore(reducer, composeWithDevTools());

const incrementButton = document.querySelector('button');
incrementButton.addEventListener('click', () => {
  console.log('click');
})