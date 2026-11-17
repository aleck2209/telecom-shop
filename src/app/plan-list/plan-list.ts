import { Component } from '@angular/core';
import { Plan, PLANS } from '../plan';
import { PlanCard } from '../plan-card/plan-card';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [PlanCard, FormsModule],
  selector: 'app-plan-list',
  styleUrl: './plan-list.css',
  templateUrl: './plan-list.html',
})
export class PlanList {
  plans: Plan[] = PLANS;
  selectedPlan: Plan | null = null;
  searchTerm: string = '';

  selectPlan(plan: Plan) {
    this.selectedPlan = plan;
  }

  get filteredPlans(): Plan[] {
    return this.plans.filter((plan) =>
      plan.name.toLowerCase().includes(this.searchTerm.toLowerCase().trim()),
    );
  }
}
