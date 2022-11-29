// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function positiveOrNegative(a) {
    if (a > 0) {
        return 'positive'
    } if (a < 0) {
        return 'negative'
    } else {
        return 'Seu valor é 0'
    }
}

console.log(positiveOrNegative(-53));