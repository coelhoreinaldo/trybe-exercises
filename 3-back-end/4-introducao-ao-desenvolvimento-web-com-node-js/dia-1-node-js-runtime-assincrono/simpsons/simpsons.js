const fs = require('fs').promises;

const readAll = async () => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const data = response.map((e) => `${e.id} - ${e.name}`)
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

readAll()