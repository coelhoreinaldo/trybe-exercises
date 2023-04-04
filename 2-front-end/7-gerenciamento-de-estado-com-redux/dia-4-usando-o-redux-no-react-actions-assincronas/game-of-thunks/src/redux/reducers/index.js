import { combineReducers } from "redux";

const INITIAL_STATE = {
  isFetching: false,
  characterName: 'hahahaha'
};

const exampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}


const rootReducer = combineReducers({ exampleReducer })

export default rootReducer;