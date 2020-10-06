const container = document.querySelector('.container');
const seates = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = parseInt(movieSelect.value);

populateIU();

// popuni dvorona iz local staorage sa podacima
function populateIU() {
  const selectedSeats = JSON.parse(localStorage.getItem('kinoSjedala'));
  if (selectedSeats) {
    seates.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = +localStorage.getItem('kinoIndex');
  const selectedPrice = +localStorage.getItem('kinoPrice');

  movieSelect.selectedIndex = selectedMovieIndex;
  ticketPrice = selectedPrice;
  updateSelectedCount();
}

// Save selected movie and price
function setMovieData(movieIndex, price) {
  localStorage.setItem('kinoIndex', movieIndex);
  localStorage.setItem('kinoPrice', price);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // kopiranje selektiranih sjedala u polje
  const kopijaSjedala = [...selectedSeats].map((seat) => {
    return [...seates].indexOf(seat);
  });

  // spremamo u local storage
  localStorage.setItem('kinoSjedala', JSON.stringify(kopijaSjedala));

  const selectedSeatsCounts = selectedSeats.length;
  count.innerHTML = selectedSeatsCounts;
  // racunamu ukupnu cijenu svih rezerviranih karata
  total.innerHTML = selectedSeatsCounts * movieSelect.value;
}

// EVENT LISENER
// movie event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// seat eventlisener
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
    console.log(e.target);
  }
});
