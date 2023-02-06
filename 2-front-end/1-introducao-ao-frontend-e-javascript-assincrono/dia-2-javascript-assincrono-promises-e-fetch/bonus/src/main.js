const dogBtn = document.getElementById('random-dog');
const catBtn = document.getElementById('random-cat');
const surpriseBtn = document.getElementById('surprise');
const image = document.getElementById('random-pet');

dogBtn.addEventListener(('click'), () => {

  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => image.src = data.message)
});

catBtn.addEventListener(('click'), () => {

  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then((data) => image.src = data.file)
});