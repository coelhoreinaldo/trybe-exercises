import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import dogReducer from './reducers/dogReducer'

const store = createStore(dogReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
