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

    if (currentDay === 24 || currentDay === 25 || currentDay === 31) {
      dayListItem.classList.add('holiday');
    } else if (currentDay === 4 || currentDay === 11 || currentDay === 18) {
      dayListItem.classList.add('friday')
    } else if (currentDay === 25) {
      dayListItem.classList.add([holiday, friday])
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
      if (holidayItems[i].style.backgroundColor === newColor){
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