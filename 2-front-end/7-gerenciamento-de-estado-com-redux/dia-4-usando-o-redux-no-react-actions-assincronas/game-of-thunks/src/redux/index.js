import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import rootReducer from './reducers'
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;