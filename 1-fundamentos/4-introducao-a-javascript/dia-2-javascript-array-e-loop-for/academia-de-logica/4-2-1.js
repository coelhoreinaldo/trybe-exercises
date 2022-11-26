
let age = 23;
let sex = 'F';
let weight = 60;
let height = 170;
let bmr;

if (sex === 'm') {  
    bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
    console.log('A taxa metabólica basal é: ' + bmr + 'Kcal');
} else if (sex === 'f') {
    bmr = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161
    console.log('A taxa metabólica basal é: ' + bmr + 'Kcal');
}