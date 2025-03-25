const apiKey = "95bf59ee"; 
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const displayMovie = document.getElementById("displayMovie");
const title = document.getElementById("title");
const genre = document.getElementById("genre");
const date = document.getElementById("date");
const rating = document.getElementById("rating");
const director = document.getElementById("director");
const cast = document.getElementById("cast");
const audio = document.getElementById("audio");
const subtitle = document.getElementById("subtitle");
const plot = document.getElementById("plot");
searchBtn.addEventListener("click", searchMovies);
async function searchMovies() {
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        alert("Please enter a movie name");
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`);
        const data = await response.json();

        if (data.Response === "False") {
            alert("Movie not found!");
            return;
        }
        displayMovieDetails(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch movie data. Please try again later.");
    }
}

function displayMovieDetails(movie) {
    title.textContent = movie.Title;
    genre.textContent = movie.Genre;
    date.textContent = movie.Released;
    rating.textContent = movie.imdbRating;
    director.textContent = movie.Director;
    cast.textContent = movie.Actors;
    audio.textContent = movie.Language;
    subtitle.textContent = movie.Language;
    plot.textContent = movie.Plot;

    // Display movie poster
    if (movie.Poster !== "N/A") {
        displayMovie.innerHTML = `<img src="${movie.Poster}" alt="${movie.Title} Poster">`;
    } else {
        displayMovie.innerHTML = "Poster not available";
    }
}