import { Service } from '@angular/core';
import { Plan, PLANS } from './plan';

@Service()
export class PlanStore {
  plans: Plan[] = PLANS;
  selectedPlan: Plan | null = null;

  select(plan: Plan) {
    this.selectedPlan = plan;
  }
}
