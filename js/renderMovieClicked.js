import { swiperSearchMovies } from "./search_movie.js";

export const moviePage = document.querySelector('.moviePage');
const moviePoster = document.querySelector('.moviePosterImg');
const movieHeading = document.querySelector('.movieHeading');
const movieGenre = document.querySelector('.movieGenre');
const movieYear = document.querySelector('.movieYearRating');
const movieDirector = document.querySelector('.movieDirector');
const moviePlot = document.querySelector('.moviePlot');
const movieActors = document.querySelector('.movieActors');

export class Movie {
  constructor(poster, title, genre, year, plot, director, actors, rating, runTime) {
      this.image = poster;
      this.name = title;
      this.genre = genre;
      this.year = year;
      this.plot = plot;
      this.director = director;
      this.actors = actors;
      this.rating = rating;
      this.runTime = runTime;
  }
}

Movie.prototype.renderToHtml = function() {
  moviePage.style.display = 'flex';
  swiperSearchMovies.innerHTML = '';
  moviePoster.src = `${this.image}`
  movieHeading.innerText = `${this.name}`
  movieGenre.innerText = `Genre: ${this.genre}`
  movieYear.innerText = `Year: ${this.year} | ${this.runTime} | Rating: ${this.rating}`
  movieDirector.innerText = `Director: ${this.director}`
  movieActors.innerText = `Actors: ${this.actors}`
  moviePlot.innerText = `${this.plot}`
  
}