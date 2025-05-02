import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionModel } from '../../models/transaction.model/transaction.model';

@Component({
  // Removed imports array from here
  imports: [CommonModule, FormsModule],
  templateUrl: './app.budget-form.component.html',
  styleUrl: './app.budget-form.component.css',
  standalone: true,
  selector: 'app-budget-form',
})
export class BudgetFormComponent {



  // Dodajemy zmienną do formularza budżetowego
  budgetForm: {
    name: string;
    amount: number | null;
    date: Date | null;
    category: string;
    type: 'income' | 'expense';
  } = {
    name: '',
    amount: null,
    date: null,
    category: '',
    type: 'income' as 'income' | 'expense'
  };


  // Dodajemy metody do obsługi formularza
  onSubmit() {
    // Logika do obsługi formularza, np. dodanie transakcji do budżetu
    console.log('Form submitted:', this.budgetForm);
  }

  onReset() {
    // Resetowanie formularza
    this.budgetForm = {
      name: '',
      amount: null,
      date: null,
      category: '',
      type: 'income'
    }; 

  console.log('Form reset:', this.budgetForm);

  }
}
