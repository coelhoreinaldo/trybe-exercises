import Swal from 'sweetalert2';

const button = document.getElementById('button');
const cardImg = document.getElementById('image');
const herosName = document.getElementById('name');

const BASE_URL = 'https://api.disneyapi.dev/characters'

const MAX_HEROES = 150;

const generateRandomId = () => Math.round(Math.random() * MAX_HEROES);

button.addEventListener('click', (event) => {
  event.preventDefault();
  const id = generateRandomId();
  
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
     cardImg.src = data.imageUrl;
     herosName.innerHTML = data.name;
    })
    .catch((error) => Swal.fire({
      title: 'Personagem não encontrado',
      text: error.message,
      icon: 'error',
      confirmButtonText:'Cool',
    }))
});
