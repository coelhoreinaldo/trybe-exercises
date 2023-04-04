import { combineReducers } from "redux";
import { REQUEST_STARTED, REQUEST_SUCCESSFUL } from "../actions";

const INITIAL_STATE = {
  isFetching: false,
  characterName: 'hahahaha'
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
      }
    default:
      return state;
  }
}

export default exampleReducer;