const lotteryDraw = (betNumber) => {
   const resultado = Math.floor(Math.random() * 6);
   return resultado === betNumber ? 'Parabéns, você ganhou' : 'Tente Novamente';
}

console.log(lotteryDraw(5));