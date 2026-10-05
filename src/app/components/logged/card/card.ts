import { Component, computed, input } from '@angular/core';

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
  readonly approvalIsHigh = computed(
    () => Number.parseFloat(this.movie().approval) > 50,
  );
}
