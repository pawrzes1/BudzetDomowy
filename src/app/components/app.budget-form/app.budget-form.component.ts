import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  // Removed imports array from here
  imports: [CommonModule, FormsModule],
  templateUrl: './app.budget-form.component.html',
  styleUrl: './app.budget-form.component.css',
  standalone: true,
  selector: 'app-budget-form',
})
export class BudgetFormComponent {
budget: any;



  constructor() { }

  // Dodajemy zmienną do formularza budżetowego
  budgetForm = {
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



  // Możesz również dodać logikę do resetowania formularza w UI
  // np. czyszczenie pól formularza, ustawienie domyślnych wartości itp. 
  // Możesz użyć ngModel lub Reactive Forms do zarządzania stanem formularza
  // w Angularze.

  // Przykład z użyciem ngModel:
  // <input [(ngModel)]="budgetForm.name" placeholder="Nazwa transakcji" />
  // <input [(ngModel)]="budgetForm.amount" placeholder="Kwota" type="number" />
  // <input [(ngModel)]="budgetForm.date" placeholder="Data" type="date" /> 
  }
}
