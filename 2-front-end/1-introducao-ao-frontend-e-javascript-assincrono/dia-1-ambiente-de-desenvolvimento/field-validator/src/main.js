import validator from 'validator';

const inputText = document.getElementById('input-text');
const validateBtn = document.getElementById('validate-btn');
const typeSelected = document.getElementById('type-selected');
const answer = document.getElementById('answer');

validateBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const field = {
        cpf: validator.isTaxID(inputText.value, 'pt-BR'),
        email: validator.isEmail(inputText.value),
        password: validator.isStrongPassword(inputText.value),
        number: validator.isDivisibleBy(inputText.value, 2),
        lowercase: validator.isLowercase(inputText.value),
    };

    answer.innerHTML = `A validação retornou ${field[typeSelected.value]}`;
});
