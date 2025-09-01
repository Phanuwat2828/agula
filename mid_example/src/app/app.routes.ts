import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { AuthGuard } from './auth.guard';
import { Member } from './pages/member/member';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { Order } from './pages/home/order/order';
export const routes: Routes = [
   {path:"home",component:Home,canActivate:[AuthGuard],children:[{path:"order/:id",component:Order}]},
   {path:"login",component:Login},
   {path:"member",component:Member,canActivate:[AuthGuard]},
   {path:"**",component:Pagenotfound}
   
];
