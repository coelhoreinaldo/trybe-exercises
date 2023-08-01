console.log('Hello, TypeScript!');

// type annotations

const firstName: string = "Joel";
const age: number = 38;
const brazilian: boolean = false;

function printPersonalInfo(data: { name: string; birthYear: number }) {
  console.log(`${data.name} was born in ${data.birthYear}.`);
}
printPersonalInfo({ name: 'Rogerinho', birthYear: 1978 });

const evenNumbers: number[] = [2, 4, 6];
const vowel: string[] = ['a', 'e', 'i', 'o', 'u'];
const booleanValues: boolean[] = [true, false];

evenNumbers.push(8) // Funciona
// evenNumbers.push('8') // Erro

// union types

function printId(id: number | string) {
  if (typeof id === "string") {
    return console.log(id.toUpperCase());
  }
  return console.log(id);
}

printId(101);
printId("202");

//Crie union types que representem: a. Os estados físicos da matéria como strings: líquido, sólido ou gasoso. b. O documento identificador de uma pessoa que pode receber valores numéricos ou texto. Ex.: “123.567.890-12” ou 123456789012. c. Sistemas operacionais: Linux, MacOS ou Windows.

type StatesOfMatter = 'líquido' | 'sólido' | 'gasoso';
type Id = number | string;
type Os = 'Linux' | 'Windows' | 'MacOS'

//Crie type aliases para: a. Representar um ou mais nomes de pessoas em uma variável que guarda reservas de restaurante. b. Um objeto que represente um endereço.

type Aliases = string | string[];
type Address = {
    city: string;
    state: string;
    number: string;
    street: string;
}