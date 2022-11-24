const price = 100;
const sale = 140;

if (price <= 0 || sale <= 0) {
    console.log('Erro, insira um valor positivo.')
} else {
    let totalCost = (price * 120) / 100;
    let profit = sale - totalCost;
    if (profit > 0) {
        console.log(`Seu lucro foi de R$ ${profit}`)
    } else if (profit < 0) {
        console.log(`Seu prejuízo foi de R$ ${profit}`)
    } else {
        console.log('Você não teve lucro.')
    }
}