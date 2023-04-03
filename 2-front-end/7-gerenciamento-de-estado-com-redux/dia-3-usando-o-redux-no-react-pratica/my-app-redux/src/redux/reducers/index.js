import { combineReducers } from "redux";

const INITIAL_STATE = { email: '' }

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {
        ...state,
        email: action.email,
      }
    default:
      return state;
  }
}

const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;