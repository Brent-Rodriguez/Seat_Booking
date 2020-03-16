const container = document.querySelector('.container')
const seat = document.querySelectorAll('.row .seat:not(.occupied')
const count = document.querySelector('count')
const total = document.querySelector('total')
const movieSelect = document.getElementById('movie')

const ticketPrice = +movieSelect.value // + changes the Type from string to number