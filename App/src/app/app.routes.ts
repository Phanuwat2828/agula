import { Routes } from '@angular/router';
import { Home } from './home/home';
import {  DatatripsComponent } from './datatrips/datatrips';

export const routes: Routes = [
    {path: '', component: Home},
    {path:'trip',component: DatatripsComponent}

]