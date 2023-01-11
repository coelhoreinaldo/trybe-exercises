const techList = (array, string) => {
  let sortedArray = array.sort();
  let object = [];
  if (array.length <= 0) {
    return 'Vazio!'
  }
  for (let i of sortedArray) {
    object.push({
      tech: i,
      name: string
    })
  }
  return object
}

console.log(techList(['JavaScript', 'CSS', 'HTML'], 'reinaldo'));

module.exports = techList;
