import { legacy_createStore as createStore } from 'redux';

// Criando a nossa store:
const store = createStore(
  reducer, /* preloadedState, */
  +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Criando uma função Reducer
const reducer = (state, action) => state

// Action para Incrementar nosso contador:
const action = {
  type: 'INCREMENT_COUNTER'
};

dispatch({ type: 'INCREMENT_COUNTER' });

const state = store.getState()

store.subscribe(() => {
  console.log(`O novo estado global é ${store.getState()}`)
})