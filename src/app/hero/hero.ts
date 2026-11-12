import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  title = 'Le forfait qui vous ressemble';
  subtitle = 'Des offres mobiles simples, sans engagement, activées en quelques minutes.';
  ctaLabel = 'Voir les forfaits';
}
