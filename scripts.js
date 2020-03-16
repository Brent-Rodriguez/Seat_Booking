const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied')
const count = document.getElementById('count')
const total = document.getElementById('total')
const movieSelect = document.getElementById('movie')

let ticketPrice = +movieSelect.value // + changes the Type from string to number

// Update Count
const updateCounts = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected')

  const selectedSeatsCount = selectedSeats.length

  // Seats Selected * price of a Ticket
  count.innerText = selectedSeatsCount
  total.innerText = selectedSeatsCount * ticketPrice
}

// Movie Select (Update Price of ticket based on movie price)
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value
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