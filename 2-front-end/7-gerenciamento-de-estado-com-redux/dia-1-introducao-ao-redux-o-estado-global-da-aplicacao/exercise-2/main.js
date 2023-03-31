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
        theme: 'light'
      }
    case 'dark':
      return {
        ...state,
        theme: 'dark'
      }
    default:
      return state
  }
}

// 2 - Crie uma store com o reducer criado.

const store = createStore(reducer, composeWithDevTools());


// 4 - Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');

themeButton.addEventListener('click', () => {
  const { theme } = store.getState()
  store.dispatch({type: theme === 'light' ? 'dark' : 'light'})
});

statusButton.addEventListener('click', () => {
  const { status } = store.getState()
  store.dispatch({type: status === 'offline' ? 'online' : 'offline'})
});

// 5 - Adicione um store.subscribe() para atualizar as seguintes informações na página:

store.subscribe(() => {
  const { theme, status } = store.getState();
  const body = document.querySelector('body');
  console.log(body);
  if(theme === 'dark') {
    body.style.backgroundColor = 'darkBlue';
    body.style.color = 'aliceBlue';
    themeButton.innerHTML = 'Light Mode'
  } else {
    body.style.backgroundColor = 'aliceBlue'
    body.style.color = 'darkBlue';
    themeButton.innerHTML = 'Dark Mode'
  }

  const statusEl = document.getElementById('status')
  if(status === 'online'){
    statusButton.innerHTML = 'Ficar Offline'
    statusEl.innerHTML = 'Online'
  } else {
    statusButton.innerHTML = 'Ficar Online'
    statusEl.innerHTML = 'Offline'
  }
})
