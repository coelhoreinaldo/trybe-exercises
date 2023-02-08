const searchButton = document.getElementById('search');
const currencyContainer = document.getElementById('currency-container');
const resultH1 = document.getElementById('resultH1');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  const moeda = document.getElementById('moeda').value;
  fetch(`https://api.exchangerate.host/latest?base=${moeda}`)
      .then((response) => response.json())
      .then((data) => {
        
      });
  
});

