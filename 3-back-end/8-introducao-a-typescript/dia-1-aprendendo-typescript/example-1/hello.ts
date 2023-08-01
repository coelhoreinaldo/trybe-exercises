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