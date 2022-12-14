
window.onload = () => {
    const body = document.body;
    if (localStorage.getItem('backgroundColor')) {
        let test = localStorage.getItem('backgroundColor');
        body.style.backgroundColor = test;
    }
    if (localStorage.getItem('fontColor')) {
        let fontColor = localStorage.getItem('fontColor');
        body.style.color = fontColor;
    }
    if (localStorage.getItem('fontSize')) {
        let fontSize = localStorage.getItem('fontSize');
        body.style.fontSize = fontSize;
    }
    if (localStorage.getItem('lineHeight')) {
        let lineHeight = localStorage.getItem('lineHeight');
        body.style.lineHeight = lineHeight;
    }
    if (localStorage.getItem('fontFamily')) {
        let fontFamily = localStorage.getItem('fontFamily');
        body.style.fontFamily = fontFamily;
    }

    // const whiteButton = document.querySelectorAll(".white-button");
    // const blackButton = document.querySelectorAll(".black-button");
    // const greenButton = document.querySelectorAll(".green-button");
    // const blueButton = document.querySelectorAll(".blue-button");
    // const yellowButton = document.querySelectorAll(".yellow-button");

    const changeBackgroundColor = () => {
        // localStorage.getItem('body.style.backgroundColor')
        let color = '';
        let backgroundColorButtons = document.querySelectorAll('.my-buttons')[0].children;
        for (let i = 0; i < backgroundColorButtons.length; i += 1) {
            backgroundColorButtons[i].addEventListener('click', () => {
                color = backgroundColorButtons[i].innerHTML;
                body.style.backgroundColor = color;
                localStorage.setItem('backgroundColor', color)
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
                localStorage.setItem('fontColor', color)
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
        for (let i = 0; i < fontSizeBottons.length; i += 1) {
            fontSizeBottons[i].addEventListener('click', () => {
                body.style.fontSize = fontSizeBottons[i].innerHTML;
                localStorage.setItem('fontSize', body.style.fontSize)
            })
        }
    }

    changeFontSize();

    changeLineHeight = () => {
        let lineHeightBottons = document.querySelectorAll('.my-buttons')[3].children;
        for (let i = 0; i < lineHeightBottons.length; i += 1) {
            lineHeightBottons[i].addEventListener('click', () => {
                body.style.lineHeight = lineHeightBottons[i].innerHTML;
                localStorage.setItem('lineHeight', body.style.lineHeight)
            })
        }
    }

    changeLineHeight();

    changeFontFamily = () => {
        let fontFamilyBottons = document.querySelectorAll('.my-buttons')[4].children;
        for (let i = 0; i < fontFamilyBottons.length; i += 1) {
            fontFamilyBottons[i].addEventListener('click', () => {
                body.style.fontFamily = fontFamilyBottons[i].innerHTML;
                localStorage.setItem('fontFamily', body.style.fontFamily)
            })
        }
    }

    changeFontFamily();

}

