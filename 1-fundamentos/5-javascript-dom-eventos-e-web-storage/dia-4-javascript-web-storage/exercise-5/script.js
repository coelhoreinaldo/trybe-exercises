const backgroundBody = document.querySelector('body');
window.onload = () => {
const changeBackgroundColor = () => {
    const whiteButton = document.querySelector("#white-button");
    const blackButton = document.querySelector("#black-button");
    const greenButton = document.querySelector("#green-button");
    const blueButton = document.querySelector("#blue-button");
    const yellowButton = document.querySelector("#yellow-button");

    
    whiteButton.addEventListener('click', () => {
        backgroundBody.style.backgroundColor = 'white';
    })
    blackButton.addEventListener('click', () => {
        backgroundBody.style.backgroundColor = 'black';
    })
    greenButton.addEventListener('click', () => {
        backgroundBody.style.backgroundColor = 'green';
    })
    blueButton.addEventListener('click', () => {
        backgroundBody.style.backgroundColor = 'blue';
    })
    yellowButton.addEventListener('click', () => {
        backgroundBody.style.backgroundColor = 'yellow';
    })  
}

changeBackgroundColor()

}