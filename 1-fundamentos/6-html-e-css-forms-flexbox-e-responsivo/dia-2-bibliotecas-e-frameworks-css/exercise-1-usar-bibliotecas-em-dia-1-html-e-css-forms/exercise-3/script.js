// const submitBtn = document.getElementById('submit-btn');
// const imagesAgreement = document.getElementById('images');

// submitBtn.addEventListener('click', (event) => {
//   event.preventDefault()

//   const validation = textInputValidation();
//   if (validation === false) {
//     alert('Dados inválidos');
//   } else {
//     alert ('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
//   }
// });

// const enableSubmit = () => {
//   submitBtn.disabled = !imagesAgreement.checked;
// };

// const textInputValidation = () => {
//   const nameInput = document.getElementById('user-name').value.length;
//   const invalidName = nameInput < 10 || nameInput > 40;

//   const emailInput = document.getElementById('user-email').value.length;
//   const invalidEmail = emailInput < 10 || emailInput > 40;

//   const whyMe = document.getElementById('why-me').value.length;
//   const invalidWhyMe = whyMe > 500;

//   if (invalidEmail || invalidName || invalidWhyMe) {
//     return false;
//   } else {
//     return true;
//   }
// };

// window.onload = () => {
//   imagesAgreement.addEventListener('change', enableSubmit);
// };


