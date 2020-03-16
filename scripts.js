const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

//populateUI() - Uncaught ReferenceError: Cannot access 'populateUI' before initialization

let ticketPrice = +movieSelect.value // + changes the Type from string to number

// Save Selected Movie index/ Price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex)
  localStorage.setItem('selectedMoviePrice', moviePrice)
}

// Update Count
const updateCounts = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  const selectedSeatsCount = selectedSeats.length

  // Count and Total Update
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Get Data from LocalStorage for UI
const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))
  

  if(selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if(selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected')
      }
    })
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

  if(selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex
  }
}

populateUI()




// Movie Select (Update Price of ticket based on movie price)
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
  setMovieData(e.target.selectedIndex, e.target.value)
  updateCounts()
})



// Select seat event
container.addEventListener('click', e => {
  if(
    e.target.classList.contains('seat') && 
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected')

    updateCounts()
  }
})  

// Initail
updateCounts()