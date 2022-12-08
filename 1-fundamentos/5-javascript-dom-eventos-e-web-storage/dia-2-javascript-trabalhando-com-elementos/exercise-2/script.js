// Crie um irmão para elementoOndeVoceEsta.
const father = document.querySelector('#pai');
const elementoOndeVoceEstaSimbling = document.createElement('section');
father.appendChild(elementoOndeVoceEstaSimbling);
elementoOndeVoceEstaSimbling.innerText = 'Sou o irmão do elementoOndeVoceEsta';//como eu saberia que o elemento foi criado com êxito sem ser escrevendo hello?

// Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.querySelector('#elementoOndeVoceEsta');
const elementoOndeVoceEstaChild = document.createElement('p');
elementoOndeVoceEsta.appendChild(elementoOndeVoceEstaChild);
elementoOndeVoceEstaChild.innerText = 'Sou o filho do elementoOndeVoceEsta'
// Crie um filho para primeiroFilhoDoFilho.
const primeiroFilhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
const primeiroFilhoDoFilhoChild = document.createElement('p');
primeiroFilhoDoFilho.appendChild(primeiroFilhoDoFilhoChild);
primeiroFilhoDoFilhoChild.innerText = 'Sou o filho do primeiroFilhoDoFilho'
// A partir desse filho criado, acesse terceiroFilho.
primeiroFilhoDoFilhoChild.parentElement.parentElement.nextElementSibling
