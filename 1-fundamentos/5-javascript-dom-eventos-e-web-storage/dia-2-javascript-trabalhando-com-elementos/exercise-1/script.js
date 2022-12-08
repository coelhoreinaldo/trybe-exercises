// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const father = document.querySelector('#elementoOndeVoceEsta').parentNode;
father.style.color = 'blue';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho').innerText = 'Lorem ipsum';
// Acesse o primeiroFilho a partir de pai.
const primeiroFilho = father.firstChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFIlho2 = elementoOndeVoceEsta.previousElementSibling;
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const text = elementoOndeVoceEsta.nextSibling;
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
// Agora acesse o terceiroFilho a partir de pai.
const terceiroFilho2 = father.firstElementChild.nextElementSibling.nextElementSibling