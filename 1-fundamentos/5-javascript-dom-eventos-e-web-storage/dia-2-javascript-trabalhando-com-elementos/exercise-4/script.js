 //   Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const fatherBody = document.querySelector('body');
const createH1Text = document.createElement('h1');
createH1Text.id = 'h1text'
fatherBody.appendChild(createH1Text)
createH1Text.innerText = 'TrybeTrip - Agência de Viagens'

// Adicione a tag main com a classe main-content como filho da tag body;
const createMain = document.createElement('main');
createMain.className = 'main-content';
fatherBody.appendChild(createMain)

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const createCenterSection = document.createElement('section');
createCenterSection.className = 'center-content';
createMain.appendChild(createCenterSection)

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

