import { Component } from '@angular/core';
import { Plan, PLANS } from '../plan';

@Component({
  imports: [],
  selector: 'app-plan-list',
  styleUrl: './plan-list.css',
  templateUrl: './plan-list.html',
})
export class PlanList {
  plans: Plan[] = PLANS
}
