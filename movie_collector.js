// Array to store movie objects
let movieCollection = [];

// Function to add a new movie to the collection
function addMovie(title, genre, rating, releaseYear) {
    const movie = {
        title: title,
        genre: genre,
        rating: rating,
        releaseYear: releaseYear
    };
    movieCollection.push(movie);
    console.log(`Added movie: ${title}`);
}

// Function to list all movies in a specific genre
function listMoviesByGenre(genre) {
    const genreMovies = movieCollection.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    
    if (genreMovies.length > 0) {
        console.log(`\nMovies in the '${genre}' genre:`);
        genreMovies.forEach(movie => {
            console.log(`- ${movie.title} (${movie.releaseYear}) - Rating: ${movie.rating}`);
        });
    } else {
        console.log(`No movies found in the '${genre}' genre.`);
    }
}

// Function to find the highest-rated movie
function highestRatedMovie() {
    if (movieCollection.length > 0) {
        const highest = movieCollection.reduce((prev, current) => (prev.rating > current.rating) ? prev : current);
        console.log(`\nHighest-rated movie: ${highest.title} (${highest.releaseYear}) - Rating: ${highest.rating}`);
    } else {
        console.log("No movies in the collection.");
    }
}

// Function to get a list of all movie titles using map()
function getMovieTitles() {
    const titles = movieCollection.map(movie => movie.title);
    console.log("\nMovie Titles:");
    titles.forEach(title => console.log(`- ${title}`));
}

// Function to find movies released after a specific year using filter()
function filterMoviesByYear(year) {
    const filteredMovies = movieCollection.filter(movie => movie.releaseYear > year);
    
    if (filteredMovies.length > 0) {
        console.log(`\nMovies released after ${year}:`);
        filteredMovies.forEach(movie => {
            console.log(`- ${movie.title} (${movie.releaseYear})`);
        });
    } else {
        console.log(`No movies found released after ${year}.`);
    }
}


// Adding Bollywood Movies
addMovie("Dilwale Dulhania Le Jayenge", "Romance", 8.2, 1995);
addMovie("Lagaan", "Drama", 8.1, 2001);
addMovie("3 Idiots", "Comedy", 8.4, 2009);
addMovie("Sholay", "Action", 8.2, 1975);
addMovie("Dangal", "Drama", 8.4, 2016);
addMovie("Kabhi Khushi Kabhie Gham", "Drama", 7.4, 2001);

// List all movies in a specific genre
listMoviesByGenre("Drama");

// Find the highest-rated movie
highestRatedMovie();

// Get all movie titles
getMovieTitles();

// Find movies released after a specific year
filterMoviesByYear(2000);
