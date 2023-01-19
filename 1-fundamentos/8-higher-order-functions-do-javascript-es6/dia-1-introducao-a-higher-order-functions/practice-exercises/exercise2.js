const numberChecker = (betNumber, number) => betNumber === number;

const lotteryDraw = (betNumber) => {
   const number = Math.floor(Math.random() * 6);
   return numberChecker(betNumber, number) ? 'Parabéns, você ganhou!' : 'Tente Novamente.';
}

console.log(lotteryDraw(5));

