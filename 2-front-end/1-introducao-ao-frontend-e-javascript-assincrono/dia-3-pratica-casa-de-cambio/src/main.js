const searchButton = document.getElementById('search');
const currencyUl = document.getElementById('currency-ul');
const resultH1 = document.getElementById('result');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const moeda = document.getElementById('currency').value.toUpperCase();

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
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const coinsImg = document.createElement('img');
        coinsImg.src = './img/coins.png';
        currencyUl.appendChild(moedas);
        const float = 3;
        span1.innerHTML = ` ${key} `;
        span2.innerHTML = value.toFixed(float);
        span2.id = 'value';
        moedas.appendChild(coinsImg);
        moedas.appendChild(span1);
        moedas.appendChild(span2);
      });
    })
    .catch((error) => Swal.fire({
      title: 'Oops',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'OK',
      color: '#282C33',
    }));
});
