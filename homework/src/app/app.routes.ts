import { Routes } from '@angular/router';
import { Movie } from './pages/movie/movie';
import { Main } from './pages/main/main';
import { Detail } from './pages/detail/detail';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
export const routes: Routes = [
    {path:"",component:Main},
    {path:"movies",component:Movie},
    {path:"detail",component:Detail},
    {path:"**",component:Pagenotfound}
];
