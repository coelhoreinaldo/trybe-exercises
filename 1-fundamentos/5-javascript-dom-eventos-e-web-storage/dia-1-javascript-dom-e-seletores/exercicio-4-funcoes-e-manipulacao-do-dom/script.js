//exercise 1
const centerContentParagraph = () => {
    const future = document.getElementsByTagName('p')[1];
    future.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';
  }
  centerContentParagraph();
 //exercise 2
 const changeMainContentColor = () => {
    const colorGreen = document.getElementsByClassName('main-content')[0];
    colorGreen.style.backgroundColor = 'rgb(76,164,109)';
} 
changeMainContentColor();
//exercise 3
const changeMainContentCenterColor = () => {
    const colorWhite = document.getElementsByClassName('center-content')[0];
    colorWhite.style.backgroundColor = 'white';
}
changeMainContentCenterColor();
//exercise 4
const changeH1Text = () => {
    const changeH1Text = document.getElementsByTagName('h1')[0];
    changeH1Text.innerText = 'Desafio - JavaScript';
}
changeH1Text();
// exercise 5
const changeP0 = () => {
    const p0TextUppercase = document.getElementsByTagName('p')[0];
    p0TextUppercase.innerText = p0TextUppercase.innerText.toUpperCase();
}
changeP0()
// exercise 6
const printTagP = () => {
    let log = document.getElementsByTagName('p');
    for (let i = 0; i < log.length; i += 1) {
        console.log(log[i].innerHTML);
    }
}
printTagP();