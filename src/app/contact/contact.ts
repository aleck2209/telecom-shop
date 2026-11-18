import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PlanStore } from '../plan-store';
import { DatePipe } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, DatePipe],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  sentAt: Date | null = null;
  store = inject(PlanStore)

  send(): void {
    this.sentAt = new Date();
  }
}
