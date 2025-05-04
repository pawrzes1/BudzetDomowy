import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.budget-form.component.html',
})
export class AppBudgetFormComponent {
  private fb = inject(FormBuilder);
  private budgetService = inject(BudgetService); 

  
  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    amount: [null, [Validators.required, Validators.min(0.01)]],
    date: [new Date().toISOString().split('T')[0], Validators.required], // Ustawienie domyślnej daty na dzisiaj
    category: ['', Validators.required],
    type: ['wydatek', Validators.required]  // domyślnie wydatek
  });

  constructor(budgetService: BudgetService) {
    // Inicjalizacja formularza budżetowego 
  }

  get categories() {
    return this.budgetService.categories; // Pobieranie kategorii z serwisu budżetowego
  }
  
  get types() {
    return this.budgetService.types; // Pobieranie typów z serwisu budżetowego
  }



  onSubmit() {
    if (this.form.valid) {
      this.budgetService.addItems(this.form.value);
      this.form.reset({
        name: '',
        amount: null,
        date: new Date(),
        category: '',
        type: 'wydatek'
      });
    }
  }
}
