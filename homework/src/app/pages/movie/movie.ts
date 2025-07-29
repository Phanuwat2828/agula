import { Component, AfterViewInit } from '@angular/core';
import { Nav } from '../../components/nav/nav';
import { CommonModule } from '@angular/common';
// import { DataService } from '../../service/datajson/datajson';
import myData from '../../../assets/data.json';


interface Movie_type {
  name: string;
  midb: number;
  image: string;
  image_bg: string;
  detail: string;
  vidoe: string;
  creator: Creator[];
}
interface Creator {
  name: string;
  image: string;
}
@Component({
  selector: 'app-movie',
  standalone:true,
  imports: [Nav,CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})

export class Movie implements AfterViewInit {
  
  currentIndex = 0;
  autoScrollInterval: any;
  movies: NodeListOf<Element> | undefined;
  movieSlider: HTMLElement | null = null;
  directorSlider: HTMLElement | null = null;
  jsonData: { [key: string]: Movie_type }= {};
  ngOnInit() {
    this.jsonData = ;

  }
  ngAfterViewInit() {
    this.movieSlider = document.getElementById('movieSlider');
    this.movies = document.querySelectorAll('.movie');
    this.directorSlider = document.getElementById('directorSlider');
    
    
    if (this.movieSlider && this.movies && this.directorSlider) {
      this.updateActiveMovie(0);
      this.startAutoScroll();

      this.movieSlider.addEventListener('mouseenter', () => {
        clearInterval(this.autoScrollInterval);
      });

      this.movieSlider.addEventListener('mouseleave', () => {
        this.startAutoScroll();
      });

      this.movies.forEach((movie, index) => {
        movie.addEventListener('click', () => {
          this.currentIndex = index;
          this.updateActiveMovie(this.currentIndex);
          clearInterval(this.autoScrollInterval);
          this.startAutoScroll();
        });
      });
    }
  }

  updateDirectorInfo() {
    if (this.directorSlider) {
      this.directorSlider.innerHTML = '';
      const activeMovie = document.querySelector('.movie.active');
      const directorName = activeMovie?.getAttribute('data-director') || '';

      const directorCard = document.createElement('div');
      directorCard.className = 'director-card';
      directorCard.innerHTML = `
        <h4 class="director-name">${directorName}</h4>
        <p class="director-role">Director</p>
      `;

      this.directorSlider.appendChild(directorCard);
      this.directorSlider.classList.add('show');
    }
  }

  updateActiveMovie(index: number) {
  if (this.movies && this.movieSlider) {
    this.movies.forEach((movie, i) => {
      movie.classList.toggle('active', i === index);
    });

    const activeMovie = this.movies[index] as HTMLElement;  

    if (this.movieSlider && activeMovie) {
      const containerWidth = this.movieSlider.offsetWidth;
      const movieWidth = activeMovie.offsetWidth;
      const scrollPosition = activeMovie.offsetLeft - (containerWidth / 2) + (movieWidth / 2);

      this.movieSlider.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });

      this.updateDirectorInfo();
    }
  }
}

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % (this.movies?.length || 0);
      this.updateActiveMovie(this.currentIndex);
    }, 3000); 
  }




}
