import { Movie } from "./renderMovieClicked.js";

export async function getMovieById(movieId) {
  const url = `https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=19f10fa8`
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Status code Error: ${response.status}`);
    }
    else {
      const data = await response.json();
      console.log(data)
      const renderMovieToHtml = new Movie(data.Poster,data.Title, data.Genre,
         data.Year,data.Plot, data.Director, data.Actors, data.imdbRating, data.Runtime);
        console.log(renderMovieToHtml)
        renderMovieToHtml.renderToHtml();
    }

  } catch(error) {
    console.log(error)
  }
}


