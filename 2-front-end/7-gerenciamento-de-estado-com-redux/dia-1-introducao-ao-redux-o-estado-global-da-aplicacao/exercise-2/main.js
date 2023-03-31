import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const INITIAL_STATE = {
  status: 'offline',
  theme: 'dark',
};

// 1 - Crie um reducer com os estados iniciais.

const reducer = (state = INITIAL_STATE, action) => {
  // 3 - Adicione um case dentro do switch do reducer para alterar os estados theme e status. O case do estado theme deve alterná-lo entre ‘light’ e ‘dark’. O case do estado status deve alterná-lo entre ‘online’ e ‘offline’.
  switch (action.type) {
    case 'online':
      return {
        ...state,
        status: 'online'
      }
    case 'offline':
      return {
        ...state,
        status: 'offline'
      }
    case 'light':
      return {
        ...state,
        status: 'light'
      }
    case 'dark':
      return {
        ...state,
        status: 'dark'
      }
    default:
      return state
  }
}

// 2 - Crie uma store com o reducer criado.

const store = createStore(reducer, composeWithDevTools());


const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  // coloque o código aqui.
});

statusButton.addEventListener('click', () => {
  // coloque o código aqui.
});