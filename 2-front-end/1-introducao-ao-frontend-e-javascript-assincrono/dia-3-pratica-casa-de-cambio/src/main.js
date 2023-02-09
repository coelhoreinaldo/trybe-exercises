const searchButton = document.getElementById('search');
const currencyUl = document.getElementById('currency-ul');
const resultH1 = document.getElementById('result');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const moeda = document.getElementById('moeda').value;

  fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
    .then((response) => response.json())
    .then((data) => {
      resultH1.innerHTML = `Valores referentes a 1 ${moeda}`;
      const { rates } = data;
      currencyUl.innerHTML = '';
      Object.entries(rates).forEach(([key, value]) => {
        const moedas = document.createElement('li');
        currencyUl.appendChild(moedas);
        moedas.innerHTML = `${key} ${value}`;
      });
    });
});
