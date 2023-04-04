import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import dogReducer from './reducers/dogReducer'

const store = createStore(dogReducer, composeWithDevTools());

export default store;
