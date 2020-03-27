const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
const ticketPrice = +movieSelect.value;

function updateSelectedCount() {
	const selectedSeats = document.querySelectorAll(".row .seat.selected");
}

//click event on the container that holds the seats | 2nd parameter is the fuction
container.addEventListener("click", e => {
	if (
		e.target.classList.contains("seat") &&
		!e.target.classList.contains("occupied")
	) {
		e.target.classList.toggle("selected");
	}
});
