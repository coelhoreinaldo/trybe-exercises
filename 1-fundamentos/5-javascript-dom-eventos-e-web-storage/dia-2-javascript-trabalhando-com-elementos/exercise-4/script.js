 //   Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const fatherBody = document.querySelector('body');
const createH1Text = document.createElement('h1');
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
const createP = document.createElement('p');
createCenterSection.appendChild(createP);
createP.innerText = 'Curtindo demais esse exercício.'

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const createLeftSection = document.createElement('section')
createLeftSection.className = 'left-content'
createMain.appendChild(createLeftSection);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const createRightSection = document.createElement('section')
createRightSection.className = 'right-content'
createMain.appendChild(createRightSection);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const addImage = document.createElement('img');
addImage.className = 'small-image';
createLeftSection.appendChild(addImage);
addImage.src = 'https://picsum.photos/200';

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const createListUl = document.createElement('ul');
createRightSection.appendChild(createListUl);
let ulList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for (let items of ulList) {
    const createLi = document.createElement('li');
    createListUl.appendChild(createLi);
    createLi.innerText = items;
}

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.


for (let i = 0; i < 3; i += 1){
    const createH3 = document.createElement('h3');
    createMain.appendChild(createH3);
    createH3.className = 'description'
}

// Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações:

// Adicione a classe title na tag h1 criada;
createH1Text.className = 'title'
// Adicione a classe description nas 3 tags h3 criadas;
//ok
// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
createMain.removeChild(createLeftSection)
// Centralize a section criada no passo 6 (aquele que possui a classe right-content).
createRightSection.style.marginRight = 'auto';
