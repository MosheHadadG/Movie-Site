import { Movie } from "./renderMovieClicked.js";

export async function getMovieById(movieId) {
  const url = `http://www.omdbapi.com/?i=${movieId}&apikey=19f10fa8`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    }
    else {
      const data = await response.json();
      const renderMovieToHtml = new Movie(data.Poster,data.Title, data.Genre,
         data.Year,data.Plot, data.Director, data.Actors, data.imdbRating);
        console.log(renderMovieToHtml)
        renderMovieToHtml.renderToHtml();
    }

  } catch(error) {
    console.log(error)
  }
}


