import { Component, input } from '@angular/core';

export interface MovieCardData {
  title: string;
  description: string;
  duration: string;
  ageRating: string;
  approval: string;
  platform: string;
  isTopTen: boolean;
}

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  readonly movie = input.required<MovieCardData>();
}
