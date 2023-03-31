import { composeWithDevTools } from "@redux-devtools/extension";
import { legacy_createStore as createStore } from "redux";

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      }

    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1
      }

    default:
      return state
  }
}

const store = createStore(reducer, composeWithDevTools())

const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")

previousButton.addEventListener('click', () => {
  store.dispatch({ type: "PREVIOUS_COLOR" })
})

nextButton.addEventListener('click', () => {
  store.dispatch({ type: "NEXT_COLOR" })
})

// 5 - Faça o subscribe da store, alterando o innerHTML da tag com id value para a cor atual e o style do elemento com id container. Você deverá ser capaz de ver as cores mudando ao fundo e o nome da cor exibida.

store.subscribe(() => {
  const globalState = store.getState();

  const currColor = document.getElementById('value');
  const backgroundColor = document.getElementById('container');
  currColor.innerHTML = globalState.colors[globalState.index];
  backgroundColor.style.backgroundColor = globalState.colors[globalState.index];
})

