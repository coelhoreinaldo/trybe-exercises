const student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

const student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};

const printSkills = (object) => {
  const keys = Object.keys(object);
  const values = Object.values(object);
  for (const i in keys) {
    console.log(`Nome da habilidade: ${keys[i]}, Nível: ${values[i]}`);
  }
} 

printSkills(student2);