import { Component } from '@angular/core';
import { Plan, PLANS } from '../plan';
import { PlanCard } from '../plan-card/plan-card';

@Component({
  imports: [PlanCard],
  selector: 'app-plan-list',
  styleUrl: './plan-list.css',
  templateUrl: './plan-list.html',
})
export class PlanList {
  plans: Plan[] = PLANS;
  selectedPlan: Plan | null = null;

  selectPlan(plan: Plan) {
      this.selectedPlan = plan
  }
}
