// Query selectors
const card = document.querySelector('.card')
const adviceId = document.querySelector('.advice-id > span')
const adviceText = document.querySelector('.advice-text')
const nextBtn = document.querySelector('.btn')

// API endpoint
const url = 'https://api.adviceslip.com/advice'

// Fetch advice
function getAdvice(url) {
  fetch(url)
    .then((res) => {
      card.dataset.fulfil = 'pending'
      return res.json()
    })
    .then((data) => {
      adviceId.innerText = data.slip.id
      adviceText.innerText = `"${data.slip.advice}"`
      card.dataset.fulfil = 'fulfil'
    })
}

getAdvice(url)

// Event listener
nextBtn.addEventListener('click', () => {
  // Fetch new advice
  getAdvice(url)
})
