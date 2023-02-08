

fetch('https://api.exchangerate.host/latest?base=${moeda}')
    .then((response) => response.json())
    .then((data) => console.log(data.rates));