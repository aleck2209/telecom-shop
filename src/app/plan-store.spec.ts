import { TestBed } from '@angular/core/testing';
import { PlanStore } from './plan-store';

describe('PlanStore', () => {
  let service: PlanStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
