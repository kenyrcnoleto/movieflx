import { Component } from '@angular/core';
import { Header } from '../../../components/logged/header/header';
import { SingUp } from '../../../components/not-logged/sign-up/sign-up';

@Component({
  imports: [Header, SingUp],
  selector: 'app-registration',
  styleUrl: './registration.css',
  templateUrl: './registration.html',
})
export class Registration {}
