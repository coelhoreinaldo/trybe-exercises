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
      if (!moeda) {
        throw new Error('Você precisa passar uma moeda');
      }
      if (!Object.keys(rates).includes(moeda)) {
        throw new Error('Moeda não existente');
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
      title: 'Oops',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
    }));
});
