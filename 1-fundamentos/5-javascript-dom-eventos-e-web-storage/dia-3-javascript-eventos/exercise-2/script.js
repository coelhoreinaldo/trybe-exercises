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
const createDays = () => {
  const daysCont = document.querySelector('#days');
  const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  // Observação 🔎: Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira.
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
// A tag <ul> deve conter o id 'days';
// Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
// Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
// Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.