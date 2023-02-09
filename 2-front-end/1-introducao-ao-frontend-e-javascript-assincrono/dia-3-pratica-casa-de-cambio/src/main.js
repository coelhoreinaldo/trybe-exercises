import Swal from 'sweetalert2';

const searchButton = document.getElementById('search');
const currencyUl = document.getElementById('currency-ul');
const resultH1 = document.getElementById('result');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const moeda = document.getElementById('moeda').value;

  fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
    .then((response) => response.json())
    .then((data) => {
      const { rates } = data;
      if (!Object.keys(rates).includes(moeda)) {
        throw new Error('Escreva o nome válido.');
      }
      resultH1.innerHTML = `Valores referentes a 1 ${moeda}`;
      currencyUl.innerHTML = '';
      Object.entries(rates).forEach(([key, value]) => {
        const moedas = document.createElement('li');
        currencyUl.appendChild(moedas);
        moedas.innerHTML = `${key} ${value}`;
      });
    })
    .catch((error) => Swal.fire({
      title: 'Moeda não encontrada',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
