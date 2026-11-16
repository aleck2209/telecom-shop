import { Component } from '@angular/core';
import { FAQ_ITEMS, FaqItem } from '../faq-item';

@Component({
  imports: [],
  selector: 'app-faq',
  styleUrl: './faq.css',
  templateUrl: './faq.html',
})
export class Faq {
  items: FaqItem[] = FAQ_ITEMS
}
