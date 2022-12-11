const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//   Crie um calendário dinamicamente.
// O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.
// Observação 🔎: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const createDays = () => {
  const daysCont = document.querySelector('#days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  for (let i = 0; i < decemberDaysList.length; i += 1) {
    const currentDay = decemberDaysList[i];
    const dayListItem = document.createElement('li');
    dayListItem.className = 'day';
    dayListItem.innerHTML = currentDay;
    daysCont.appendChild(dayListItem);

    if (currentDay === 24 || currentDay === 31) {
      dayListItem.classList.add('holiday');
    } else if (currentDay === 4 || currentDay === 11 || currentDay === 18) {
      dayListItem.classList.add('friday')
    } else if (currentDay === 25) {
      dayListItem.classList.add('friday', 'holiday');
    }
  }
}

createDays()

// Parte 2
// Implemente uma função que crie dinamicamente um botão com o nome “Feriados”;
// Sua função deve receber um parâmetro com a string 'Feriados';
// Adicione a este botão a ID "btn-holiday";
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container".

const holidaysButton = (buttonName) => {
  const holidaysDiv = document.querySelector('.buttons-container');
  const holidaysItem = document.createElement('button');
  holidaysItem.id = 'btn-holiday'
  holidaysDiv.appendChild(holidaysItem);

  //post feedback
  holidaysItem.innerHTML = buttonName;
}

holidaysButton('Feriados');

// Parte 3
// Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday";
// Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday".
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor “rgb(238,238,238)”.

const holidaysColor = () => {
  let holidaysButton = document.querySelector('#btn-holiday');
  let holidayItems = document.getElementsByClassName('holiday');
  let backgroundColor = 'rgb(238, 238, 238)'
  let newColor = 'cyan';
  //post feedback
  holidaysButton.addEventListener('click', () => {
    for (let i = 0; i < holidayItems.length; i += 1) {
      if (holidayItems[i].style.backgroundColor === newColor) {
        holidayItems[i].style.backgroundColor = backgroundColor;
      } else {
        holidayItems[i].style.backgroundColor = newColor;
      }
    }
  })
}

holidaysColor();

// Parte 4
// Implemente uma função que crie dinamicamente um botão com o nome "Sexta-feira";
// Sua função deve receber como parâmetro a string “Sexta-feira”;
// Adicione a esse botão o ID "btn-friday";
// Adicione esse botão como filho/filha da tag <div> com classe "buttons-container".

const createFridayButton = (buttonName) => {
  const buttonsDiv = document.querySelector('.buttons-container');
  const fridayButton = document.createElement('button');
  fridayButton.id = 'btn-friday';
  buttonsDiv.appendChild(fridayButton);
  fridayButton.innerHTML = buttonName;
}

createFridayButton('Sexta-feira')

// Parte 5
// Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira;
// Adicione ao botão “Sexta-feira” um evento de “click” e modifique o texto a ser exibido nos dias que são sextas-feiras.
// De olho na dica 👀: É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.

const fridayButtonDispay = (fridaysArray) => {
  const fridayButton = document.querySelector('#btn-friday');
  const fridayItems = document.querySelectorAll('.friday');
  const newText = 'its friday'


  fridayButton.addEventListener('click', () => {
    for (let i = 0; i < fridayItems.length; i += 1) {
      if (fridayItems[i].innerHTML !== newText) {
        fridayItems[i].innerHTML = newText
      } else {
        fridayItems[i].innerHTML = fridaysArray[i];
      }
    }
  })
}

let decemberFridays = [4, 11, 18, 25]
fridayButtonDispay(decemberFridays);
//DÚVIDAS;  como usar aquele unset aqui???, olhei o gabarito e me senti muito trapaceado porque assim: não era pra resolver de forma dinâmica? Eu tava tentando usar o unset para retornar ao texto padrão (4, 11, 18, 25) mas não ia, imagina se eu tenho que criar um array chamado Fridays para todas sexta-feiras pelos próximos 50 anos??? Custei muito pra resolver a linha 124, queria saber se tinha um jeito de fazer usando o unset que usei no exercício 1 anterior



// Parte 6
// Implemente duas funções que criem um efeito de “zoom”;
// Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
// De olho na dica 👀: Você pode utilizar a propriedade event.target.


const dayMouseOver = () => {
  let daysOfTheMonth = document.getElementById('days');
  daysOfTheMonth.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}

dayMouseOver();

const dayMouseOut = () => {
  let daysOfTheMonth = document.getElementById('days');
  daysOfTheMonth.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = 'unset';
    event.target.style.fontWeight = 'unset';
  })
}

dayMouseOut();

//DÚVIDAS: Não dá pra usar o event.target com class?

// Parte 7
// Implemente uma função que adicione uma tarefa personalizada ao calendário;
// A função deve receber como parâmetro a string com o nome da tarefa (ex: “cozinhar”) e criar dinamicamente um elemento com a tag <span> contendo a tarefa;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const createTask = (taskName) => {
  const myTasksDiv = document.querySelector('.my-tasks');
  const taskSpan = document.createElement('span');
  taskSpan.innerHTML = taskName;
  myTasksDiv.appendChild(taskSpan);
}

createTask('Aprender Eventos');

//DÚVIDAS: não dá pra usar com getelementsbyclass? tem a ver com nodelist e html colection?

// Parte 8
// Implemente uma função que adicione uma legenda com cor para a tarefa;
// Essa função deverá receber como parâmetro uma string (‘cor’) e criar dinamicamente um elemento de tag <div> com a classe task;
// O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada;
// O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".

const addColorToTask = (color) => {
  const myTasksDiv = document.querySelector('.my-tasks');
  const createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;
  myTasksDiv.appendChild(createDiv);
}

addColorToTask('aquamarine');


// Parte 9
// Implemente uma função que selecione uma tarefa;
// Adicione um evento que ao clicar no elemento com a tag <div> referente à cor da sua tarefa, atribua a esse elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada;
// Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task, ou seja, essa tarefa está deixando de ser uma tarefa selecionada.
const selectTask = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let divTags = document.querySelector('.task');
  divTags.addEventListener('click', (event) => {
    // console.log(event.target);
      if (selectedTask.length === 0){
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
  });
}

selectTask();
//DÚVIDAS: Quem afinal é o .target dessa função???

