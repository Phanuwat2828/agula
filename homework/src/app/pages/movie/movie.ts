import { Component, AfterViewInit } from '@angular/core';
import { Nav } from '../../components/nav/nav';
import { CommonModule } from '@angular/common';
import myData from '../../../assets/data.json';
import { RouterModule,Router,RouterLink,RouterOutlet } from '@angular/router';

interface Movie_type {
  name: string;
  midb: number;
  image: string;
  image_bg: string;
  detail: string;
  vidoe: string;
  type:string;
  creator: Creator[];
}
interface Creator {
  name: string;
  image: string;
  role:string;
  title:string;
  age:number| string;

}
@Component({
  selector: 'app-movie',
  standalone:true,
  imports: [Nav,CommonModule],
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})

export class Movie implements AfterViewInit {
  constructor(private router: Router){}
  currentIndex = 0;
  autoScrollInterval: any;
  movies: NodeListOf<Element> | undefined;
  movieSlider: HTMLElement | null = null;
  directorSlider: HTMLElement | null = null;
  jsonData: { [key: string]: Movie_type }= {};
  ngOnInit() {
    this.jsonData = myData;
  }
  redirect(id:number){
    this.router.navigate(['/detail'], {
      queryParams: { id: id }
    });
  }
  redirect_preson(id:number,index:number){
    this.router.navigate(['/preson'], {
      queryParams: { id: id ,index:index}

    });
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

  updateDirectorInfo(index: number) {
    const creatorList = this.jsonData["movie" + index.toString()]["creator"];
    if (this.directorSlider) {
      this.directorSlider.innerHTML = ''; // ล้างก่อน
      creatorList.forEach((element,i)=> {
        const directorName = element['name'];

        const directorCard = document.createElement('div');
        directorCard.className = 'director-card';
        directorCard.innerHTML = `
         
          <div class="creator_container">
            <img src="${element['image']}" alt="" style="border-radius: 50%;">
             <h4 style=" color: white;  text-align: center;">${directorName}</h4>
              <h5 style=" color: gray;  text-align: center;">${element.age}</h5>
        </div>
        `;
        directorCard.querySelector('.creator_container')?.addEventListener('click', () => {
          this.redirect_preson(index, i);
        });
       
        this.directorSlider!.appendChild(directorCard); // ✅ ปลอดภัยเพราะเราเช็กแล้ว
      });

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

      this.updateDirectorInfo(index+1);
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
