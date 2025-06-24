import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { App } from './app'; 
import { Landing  } from './landing/landing';

export const routes: Routes = [
  { path: '', component: Landing},
  { path: 'login', component: LoginComponent }
  
];

