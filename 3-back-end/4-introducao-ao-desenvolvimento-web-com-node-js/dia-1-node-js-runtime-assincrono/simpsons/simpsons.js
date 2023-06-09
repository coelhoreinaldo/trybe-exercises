const fs = require('fs').promises;

const readAll = async () => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const data = response.map((character) => `${character.id} - ${character.name}`)
    console.log(data)
    return data
  } catch (error) {
    console.error(error)
  }
}

// readAll()

const readCharacterInfoById = async (id) => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const characterInfo = response.find((character) => +character.id === id)
    if (!characterInfo) throw new Error('Personagem não encontrado')
    console.log(characterInfo)
    return characterInfo
  } catch (error) {
    console.error(error)
  }
}

// readCharacterInfoById(7)

const removeCharactersFromJson = async () => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const data = response.filter(({ id }) => +id !== 10 && +id !== 6)
    await fs.writeFile('./simpsons.json', JSON.stringify(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

// removeCharactersFromJson()

const getTwoSimpsons = async () => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const data = response.filter(({ id }) => +id === 1 || +id === 4)
    await fs.writeFile('./simpsons.json', JSON.stringify(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

// getTwoSimpsons()

const addNewSimpson = async () => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const simpsonNelson = {
      id: `${response.length}`, name: 'Nelson Muntz'
    }
    const data = [...response, simpsonNelson]
    await fs.writeFile('./simpsons.json', JSON.stringify(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

// addNewSimpson()

const replaceASimpson = async () => {
  try {
    const response = JSON.parse(await fs.readFile('./simpsons.json'))
    const data = response.filter((character) => !character.name.includes('Nelson'));
    const maggie = { "id": "3", "name": "Maggie Simpson" }
    const newData = [...data, maggie]
    await fs.writeFile('./simpsons.json', JSON.stringify(newData))
    return data
  } catch (error) {
    console.error(error)
  }
}

replaceASimpson()