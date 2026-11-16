import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { PlanList } from '../plan-list/plan-list';
import { Faq } from '../faq/faq';

@Component({
  imports: [Hero, PlanList, Faq],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
