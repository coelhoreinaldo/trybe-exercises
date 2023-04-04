import { combineReducers } from "redux";
import { REQUEST_FAILED, REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  characterName: 'hahahaha',
  errorMessage: '',
};

const exampleReducer = (state = INITIAL_STATE, action) => {
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
        characterName: action.payload,
        errorMessage: ''
      }
      case REQUEST_FAILED:
        return {
          ...state,
          isFetching: false,
          characterName: '',
          errorMessage: action.payload,
        }
    default:
      return state;
  }
}

export default exampleReducer;