import { Component, computed, inject, signal } from '@angular/core';
import { Plan } from '../plan';
import { PlanCard } from '../plan-card/plan-card';
import { FormsModule } from '@angular/forms';
import { PlanStore } from '../plan-store';

@Component({
  imports: [PlanCard, FormsModule],
  selector: 'app-plan-list',
  styleUrl: './plan-list.css',
  templateUrl: './plan-list.html',
})
export class PlanList {
  searchTerm = signal('');
  store = inject(PlanStore);

  // filteredPlans(): Plan[] {
  //   return this.store.plans.filter((plan) =>
  //     plan.name.toLowerCase().includes(this.searchTerm().toLowerCase().trim()),
  //   );
  // }

  filteredPlans = computed(() => {
    return this.store.plans.filter((plan) =>
      plan.name.toLowerCase().includes(this.searchTerm().toLowerCase().trim()),
    );
  });
}
