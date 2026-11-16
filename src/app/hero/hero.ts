import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
})
export class Hero {
  title: string = 'Le forfait qui vous ressemble';
  subtitle: string = 'Des offres mobiles simples, sans engagement, activées en quelques minutes.';
  ctaLabel: string = 'Voir les forfaits';
  ctaTarget: string = '#forfaits';
}
