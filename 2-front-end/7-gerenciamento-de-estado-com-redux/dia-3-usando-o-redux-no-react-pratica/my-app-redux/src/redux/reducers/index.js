import { combineReducers } from "redux";

const INITIAL_STATE = { theme: "light" }

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;