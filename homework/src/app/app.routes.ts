import { Routes } from '@angular/router';
import { Movie } from './pages/movie/movie';
import { Main } from './pages/main/main';
export const routes: Routes = [
    {path:"",component:Main},
    {path:"movies",component:Movie},
];
