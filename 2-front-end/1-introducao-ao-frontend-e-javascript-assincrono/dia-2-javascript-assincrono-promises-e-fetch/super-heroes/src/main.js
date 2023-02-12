

const meme = () => {
  const randomNumber = Math.round(Math.random() * 731)

  fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomNumber}.json`)
  .then((response) => response.json())
  .then((data) => console.log(data))
}
meme()