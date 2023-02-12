import './style.css';

const button = document.getElementById('button');
const cardImg = document.getElementById('image');
const herosName = document.getElementById('name');

const MAX_HEROES = 731;


button.addEventListener('click', (event) => {
  const randomNumber = Math.round(Math.random() * MAX_HEROES)
  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber}.json`)
  .then((response) => response.json())
  .then((data) => {
    cardImg.src = data.images.sm;
    herosName.innerHTML = data.name
  })
})

