const sum = (...number) => {
  return number.reduce((acc, curr) => acc + curr, 0)
}

console.log(sum(1, 4, 5))