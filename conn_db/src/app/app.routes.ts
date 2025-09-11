import { Routes } from '@angular/router';
import { CallApi } from './pages/call-api/call-api';
import { Details } from './pages/details/details';
export const routes: Routes = [
    {path:'trips',component:CallApi},
    {path:"details",component:Details}
];
