import { SearchMovies } from "./renderMovieSearch.js";
import { moviePage } from "./renderMovieClicked.js";
export const searchForm = document.querySelector('#searchForm')
export const searchInput = document.querySelector('#searchInput')
export const swiperSearchMovies = document.querySelector('#swiper_pop_movies');
const movieNotFoundPara = document.querySelector('.movieNotFoundPara')

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
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === 'False') {
      movieNotFoundPara.innerText = ` לא נמצאו תוצאות חיפוש לביטוי "${searchInput.value}"`;
      throw new Error('Movie not Found');
    }
    else {
      movieNotFoundPara.innerText = '';
      const searchMovies = data.Search;
      searchMovies.forEach((movie) => {
        const movieSearch = new SearchMovies(movie.Poster, movie.Title, movie.Year, movie.imdbID);
        movieSearch.addToBoxHtml();
      })
    }

  } catch (error) {
    console.log(error)
  }

}

