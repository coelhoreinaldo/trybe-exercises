import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

// 1 - Crie um reducer com os estados iniciais.

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_STATUS':
      return {
        ...state,
        status: state.status === 'offline' ? 'online' : 'offline',
      }
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools());

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_THEME'})
});

statusButton.addEventListener('click', () => {
  store.dispatch({type: 'TOGGLE_STATUS'})
});

store.subscribe(() => {
  const { theme, status } = store.getState();
  const body = document.querySelector('body');
  const statusEl = document.getElementById('status')

  if(theme === 'dark') {
    body.style.backgroundColor = 'darkBlue';
    body.style.color = 'aliceBlue';
    themeButton.innerHTML = 'Light Mode'
  } else {
    body.style.backgroundColor = 'aliceBlue'
    body.style.color = 'darkBlue';
    themeButton.innerHTML = 'Dark Mode'
  }

  if(status === 'online'){
    statusButton.innerHTML = 'Ficar Offline'
    statusEl.innerHTML = 'Online'
  } else {
    statusButton.innerHTML = 'Ficar Online'
    statusEl.innerHTML = 'Offline'
  }
})
