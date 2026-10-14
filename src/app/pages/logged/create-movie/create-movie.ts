import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink],
  selector: 'app-create-movie',
  styleUrl: './create-movie.css',
  templateUrl: './create-movie.html',
})
export class CreateMovie {}
