const picker = new Pikaday({
  field: document.getElementById('datepicker'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
}); //perguntar na aula

const validation = new JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '6px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  },
  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  },
});

validation.addField("#user-name", [
  {
    rule: "minLength",
    value: 10,
  },
  {
    rule: "maxLength",
    value: 40,
  },
  {
    rule: "required",
    errorMessage: "Preencha com seu nome",
  },
]);
validation.addField("#user-email", [
  {
    rule: "minLength",
    value: 10,
  },
  {
    rule: "maxLength",
    value: 50,
  },
  {
    rule: "required",
    errorMessage: "Email é necessário",
  },
  {
    rule: "email",
    errorMessage: "Formato de email inválido"
  },
]);
validation.addField("#why-me", [
  {
    rule: "maxLength",
    value: 500,
  }
]);

const submitBtn = document.getElementById('submit-btn');
const imagesAgreement = document.getElementById('images');

// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault()

//   const validation = textInputValidation();
//   if (validation === false) {
//     alert('Dados inválidos');
//   } else {
//     alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
//   }
// });

const enableSubmit = () => {
  submitBtn.disabled = !imagesAgreement.checked;
};


window.onload = () => {
  imagesAgreement.addEventListener('change', enableSubmit);
};