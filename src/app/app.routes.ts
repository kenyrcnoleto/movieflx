import { Routes } from '@angular/router';
import { Home } from './pages/logged/home/home';
import { Registration } from './pages/not-logged/registration/registration';
import { Login } from './pages/not-logged/home/login';

export const routes: Routes = [
  {path: '', component: Home},
  { path: 'login', component: Login },
  { path: 'cadastre-se', component: Registration }
];
