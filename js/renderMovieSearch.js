import { swiperSearchMovies } from './search_movie.js'
import { getMovieById } from './clicked_movie.js';

export class SearchMovies {
    constructor(img, name, desc, id) {
        this.image = img;
        this.name = name;
        this.descrption = desc;
        this.id = id;

    }
}
SearchMovies.prototype.addToBoxHtml = function() {
    const swiper = document.createElement("div");
    swiper.className = "swiper-slide";
    swiperSearchMovies.appendChild(swiper);

    const newMovieBox = document.createElement("div");
    newMovieBox.className = "boxMain";
    swiper.appendChild(newMovieBox);

    const newImg = document.createElement("img");
    newImg.src = `${this.image}`;
    newImg.setAttribute('id', `${this.id}`);
    newMovieBox.appendChild(newImg);

    const newTitle = document.createElement("span");
    newTitle.className = "titleItemBox";
    newTitle.innerHTML = this.name;
    newMovieBox.appendChild(newTitle);

    const newDesc = document.createElement("p");
    newDesc.className = "descItemBox";
    newDesc.innerHTML = this.descrption;
    newMovieBox.appendChild(newDesc);

    // const newButton = document.createElement("button");
    // newButton.className = "buttonItemBox";
    // newButton.innerHTML = "לחץ לצפייה";
    // newButton.setAttribute('id', `${this.id}`)
    // newMovieBox.appendChild(newButton);

    // get id from movieBox and call getMovieById function
    newImg.addEventListener('click', (e) => {
        const buttonClicked = e.target;
        const movieId = buttonClicked.getAttribute('id');
        getMovieById(movieId);

    })
    
    
}