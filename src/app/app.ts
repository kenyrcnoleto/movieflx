import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/not-logged/header/header';
import { SignUp } from './components/not-logged/sign-up/sign-up';
import { Login } from './pages/not-logged/home/login';

@Component({
  imports: [RouterOutlet, Header, SignUp, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movieflx');
}
