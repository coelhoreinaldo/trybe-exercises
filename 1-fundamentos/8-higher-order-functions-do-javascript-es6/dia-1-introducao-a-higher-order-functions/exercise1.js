const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// emailListInData.forEach((email) => {
//   console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
// })

const sendEmail = (email) => console.log(`O email ${email} está cadastrado em nosso banco de dados!`);

emailListInData.forEach(sendEmail);