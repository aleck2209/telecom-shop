import { Component, input, output } from '@angular/core';
import { Plan } from '../plan';

@Component({
  imports: [],
  selector: 'app-plan-card',
  styleUrl: './plan-card.css',
  templateUrl: './plan-card.html',
})
export class PlanCard {
  plan = input.required<Plan>();
  selected = output<Plan>()

  choose() {
    this.selected.emit(this.plan())
  }
}
