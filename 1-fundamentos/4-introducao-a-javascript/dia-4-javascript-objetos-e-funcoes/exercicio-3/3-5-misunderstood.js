// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function shouldVolley(raining, laziness) {
    if (raining & laziness) {
        return false
    } else {
        return true;
    }
}

console.log(shouldVolley(true, true));