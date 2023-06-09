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
    const data = response.filter((id) => id !== 10 && id !== 6)
    await fs.writeFile('./simpsons.json', JSON.stringify(data))
    return data
  } catch (error) {
    console.error(error)
  }
}

removeCharactersFromJson()