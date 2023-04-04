import { combineReducers } from "redux";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  characterInfo: {
    name: 'Reinaldo Coelho',
    titles: ['JavaScripter', 'Reacter.js', 'Tailwinder']
  },
  errorMessage: '',
};

const characterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
      }
    case REQUEST_SUCCESSFUL:
      return {
        ...state,
        isFetching: false,
        characterInfo: action.payload,
        errorMessage: ''
      }
      case REQUEST_FAILED:
        return {
          ...state,
          isFetching: false,
          characterInfo: '',
          errorMessage: action.payload,
        }
    default:
      return state;
  }
}

export default characterReducer;