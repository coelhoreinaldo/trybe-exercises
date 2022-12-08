 //   Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const fatherBody = document.querySelector('body');
const h1Text = document.createElement('h1');
h1Text.id = 'h1text'
fatherBody.appendChild(h1Text)
h1Text.innerText = 'TrybeTrip - Agência de Viagens'

// Adicione a tag main com a classe main-content como filho da tag body;
// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;