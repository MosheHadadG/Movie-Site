import { SearchMovies } from "./renderMovieSearch.js";
import { moviePage } from "./renderMovieClicked.js";
export const searchForm = document.querySelector('#searchForm')
export const searchInput = document.querySelector('#searchInput')
export const swiperSearchMovies = document.querySelector('#swiper_pop_movies');


 export function searchUserEvent(event) {
  event.preventDefault();
  const movieName = searchInput.value
  moviePage.style.display = 'none';
  swiperSearchMovies.innerHTML = '';
  getMovieByName(movieName)
}

searchForm.addEventListener('submit', searchUserEvent);

export async function getMovieByName(movieName) { 
  const url = `https://www.omdbapi.com/?s=${movieName}&apikey=19f10fa8`
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.Search)
  const searchMovies = data.Search
  searchMovies.forEach((movie) => {
    const movieSearch = new SearchMovies(movie.Poster, movie.Title, movie.Year, movie.imdbID);
    movieSearch.addToBoxHtml();
  })
}

