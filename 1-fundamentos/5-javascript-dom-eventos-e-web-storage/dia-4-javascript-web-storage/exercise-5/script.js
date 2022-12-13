
window.onload = () => {
const changeBackgroundColor = () => {
    const body = document.querySelector('body');
    body.style.color = 'black';
    let color;
    const whiteButton = document.querySelector("#white-button");
    const blackButton = document.querySelector("#black-button");
    const greenButton = document.querySelector("#green-button");
    const blueButton = document.querySelector("#blue-button");
    const yellowButton = document.querySelector("#yellow-button");

    whiteButton.addEventListener('click', () => {
        color = whiteButton.innerHTML;        
        body.style.backgroundColor = color;
    })
    blackButton.addEventListener('click', () => {
        color = blackButton.innerHTML;     
        body.style.backgroundColor = color;
    })
    greenButton.addEventListener('click', () => {
        color = greenButton.innerHTML;     
        body.style.backgroundColor = color;
    })
    blueButton.addEventListener('click', () => {
        color = blueButton.innerHTML;     
        body.style.backgroundColor = color;
    })
    yellowButton.addEventListener('click', () => {
        color = yellowButton.innerHTML;     
        body.style.backgroundColor = color;
    })
    localStorage.setItem(body.style.backgroundColor, color); // Minha dúvida: como eu salvo minhas coisas no local storage po?
}

changeBackgroundColor()

}