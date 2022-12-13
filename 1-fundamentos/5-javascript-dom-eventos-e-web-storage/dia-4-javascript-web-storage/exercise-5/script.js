
window.onload = () => {
    const body = document.body;
    // const whiteButton = document.querySelectorAll(".white-button");
    // const blackButton = document.querySelectorAll(".black-button");
    // const greenButton = document.querySelectorAll(".green-button");
    // const blueButton = document.querySelectorAll(".blue-button");
    // const yellowButton = document.querySelectorAll(".yellow-button");

const changeBackgroundColor = () => {
    localStorage.getItem('body.style.backgroundColor')
    let color = '';
    let backgroundColorButtons = document.querySelectorAll('.my-buttons')[0].children;
    for (let i = 0; i < backgroundColorButtons.length; i += 1){
        backgroundColorButtons[i].addEventListener('click', () => {
            color = backgroundColorButtons[i].innerHTML;
            body.style.backgroundColor = color;
        })
    }
    // whiteButton[0].addEventListener('click', () => {
    //     color = whiteButton[0].innerHTML;        
    //     body.style.backgroundColor = color;
    //     localStorage.setItem('body.style.backgroundColor', 'color');
    // })
    // blackButton[0].addEventListener('click', () => {
    //     color = blackButton[0].innerHTML;     
    //     body.style.backgroundColor = color;
    // })
    // greenButton[0].addEventListener('click', () => {
    //     color = greenButton[0].innerHTML;     
    //     body.style.backgroundColor = color;
    // })
    // blueButton[0].addEventListener('click', () => {
    //     color = blueButton[0].innerHTML;     
    //     body.style.backgroundColor = color;
    // })
    // yellowButton[0].addEventListener('click', () => {
    //     color = yellowButton[0].innerHTML;     
    //     body.style.backgroundColor = color;
    // })
    // localStorage.setItem(body.style.backgroundColor, color); // Minha dúvida: como eu salvo minhas coisas no local storage po?
}

changeBackgroundColor();

const changeFontColor = () => {
    let color = '';
    let fontColorButtons = document.querySelectorAll('.my-buttons')[1].children;
    for (let i = 0; i < fontColorButtons.length; i += 1) {
        fontColorButtons[i].addEventListener('click', () => {
            color = fontColorButtons[i].innerHTML;
            body.style.color = color;
        })
    }
    // whiteButton[1].addEventListener('click', () => {
    //     color = whiteButton[1].innerHTML;
    //     body.style.color = color;
    // })
    // blackButton[1].addEventListener('click', () => {
    //     color = blackButton[1].innerHTML;
    //     body.style.color = color;
    // })
    // blueButton[1].addEventListener('click', () => {
    //     color = blueButton[1].innerHTML;
    //     body.style.color = color;
    // })
}

changeFontColor();

const changeFontSize = () => {
    let fontSizeBottons = document.querySelectorAll('.my-buttons')[2].children
    for (let i = 0; i < fontSizeBottons.length; i += 1){
        fontSizeBottons[i].addEventListener('click', () => {
            body.style.fontSize = fontSizeBottons[i].innerHTML;
        })
    }
}

changeFontSize();

}