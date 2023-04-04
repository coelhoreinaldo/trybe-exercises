import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import characterReducer from './reducers'
import thunk from "redux-thunk";

const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;