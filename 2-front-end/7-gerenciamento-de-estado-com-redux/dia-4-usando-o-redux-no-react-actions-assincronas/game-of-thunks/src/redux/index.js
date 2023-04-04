import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";

store = createStore(rootReducer, composeWithDevTools())