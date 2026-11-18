import { Service } from '@angular/core';
import { Plan, PLANS } from './plan';
import { signal } from '@angular/core';

@Service()
export class PlanStore {
  plans: Plan[] = PLANS;
  selectedPlan = signal<Plan | null>(null);

  select(plan: Plan) {
    this.selectedPlan.set(plan)
  }
}
