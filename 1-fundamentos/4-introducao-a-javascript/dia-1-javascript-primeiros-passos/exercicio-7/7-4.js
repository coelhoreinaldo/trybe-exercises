let grossSalary = 3000;
let baseSalary = 0;
let netSalary = 0;
let ir = 0;

// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

if (grossSalary <= 1556.94) {
    baseSalary = grossSalary - (grossSalary * 0.08);
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
    baseSalary = grossSalary - (grossSalary * 0.09);
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
    baseSalary = grossSalary - (grossSalary * 0.11);
} else if (grossSalary > 5189.82) {
    baseSalary = grossSalary - 570.88;
}

// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

if (baseSalary <= 1903.98) {
    ir = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
    ir = (baseSalary * 0.075) - 142.80;
} else if (baseSalary >= 2826.66 && baseSalary <= 3571.05) {
    ir = (baseSalary * 0.15) - 354.80;
} else if (baseSalary >= 3571.06 && baseSalary <= 4664.68) {
    ir = (baseSalary * 0.225) - 636.13;
} else if (baseSalary > 4664.68) {
    ir = (baseSalary * 0.275) - 869,36;
}

netSalary = baseSalary - ir;

console.log(`Seu salário base é de R$${netSalary}.`);