import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/not-logged/header/header';
import { Login } from './components/not-logged/sign-up/sign-up';

@Component({
  imports: [RouterOutlet, Header, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('movieflx');
}
