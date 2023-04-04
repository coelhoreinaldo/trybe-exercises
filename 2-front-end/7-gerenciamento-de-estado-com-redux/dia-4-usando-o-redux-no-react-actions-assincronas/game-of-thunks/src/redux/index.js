import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import exampleReducer from './reducers'
import thunk from "redux-thunk";

const store = createStore(exampleReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;