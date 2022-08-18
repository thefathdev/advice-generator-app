// Query selectors
const adviceId = document.querySelector('.advice-id > span')
const adviceText = document.querySelector('.advice-text')
const nextBtn = document.querySelector('.btn')

// API endpoint
const url = 'https://api.adviceslip.com/advice'

// Fetch advice
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.slip.id, data.slip.advice)
    adviceId.innerText = data.slip.id
    adviceText.innerText = `"${data.slip.advice}"`
  })

// Event listener
nextBtn.addEventListener('click', () => {
  // Fetch new advice
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip.id, data.slip.advice)
      adviceId.innerText = data.slip.id
      adviceText.innerText = `"${data.slip.advice}"`
    })
})
