// Remova a tag h2, filha do elemento elementoOndeVoceEsta.
// const father = document.getElementById('pai');
// const childs = father.childNodes;

// for (let i = childs.length - 1; i >= 0; i -= 1) {
//         const current = childs[i];
//         if (current.id === 'elementoOndeVoceEsta') {
//             childs.removeChild(current.firstElementChild);
//         }
// }

const father = document.getElementById('pai');
const childs = father.childNodes;

for (let i = childs.length - 1; i >= 0; i -= 1) {
  const current = childs[i];

  if (current.id === 'elementoOndeVoceEsta') { // verifica se o id do filho atual é igual a 'elementoOndeVoceEsta'
    current.removeChild(current.firstElementChild); // remove o primeiro elemento do filho atual, no caso a tag <h2>
  }
}


//sem laço for
// const pai = document.getElementById('elementoOndeVoceEsta');
// pai.removeChild(pai.firstElementChild);