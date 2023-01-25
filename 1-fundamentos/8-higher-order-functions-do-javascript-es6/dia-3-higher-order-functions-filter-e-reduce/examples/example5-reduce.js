const numbers = [50, 85, -30, 3, 15];

const reduced = numbers.reduce((bigger, number) => {
  let biggestNumber = null;
  if (bigger > number){
    biggestNumber = bigger
  } else {
    biggestNumber = number
  }
  return biggestNumber
})

console.log(reduced);