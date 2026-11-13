import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Hero } from './hero/hero';
import { PlanList } from './plan-list/plan-list';

@Component({
  imports: [RouterOutlet, Header, Footer, Hero, PlanList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('telecom-shop');
}
