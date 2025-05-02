
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';


@Component({
  imports: [CommonModule, FormsModule],
  templateUrl: './app.budget-form.component.html',
  styleUrl: './app.budget-form.component.css',
  standalone: true,
  selector: 'app-budget-form',
})
export class BudgetFormComponent {

  constructor(private budgetService: BudgetService) {}



  categories: string[] = [
    'Jedzenie',
    'Transport',
    'Rozrywka',
    'Zakupy',
    'Zdrowie',
    'Podróże',
    'Edukacja',
    'Dom',
    'Ubrania',
    'Technologia',
    'Sport',
    'Inwestycje',
    'Inne'
  ];

  // Dodajemy zmienną do formularza budżetowego
  budgetForm: {
    name: string;
    amount: number | null;
    date: Date | null;
    category: string;
    type: 'przychód' | 'wydatek';
  } = {
    name: '',
    amount: null,
    date: null,
    category: '',
    type: 'przychód' as 'przychód' | 'wydatek',
  };


  // Dodajemy metody do obsługi formularza
  onSubmit() {
    if (!this.budgetForm.name || !this.budgetForm.amount || !this.budgetForm.date || !this.budgetForm.category) {
      if (this.budgetForm.date) { // Sprawdzamy, czy data nie jest null
        const item = {
          id: Math.floor(Math.random() * 1000), // Generowanie losowego ID
          name: this.budgetForm.name,
          amount: this.budgetForm.amount ?? 0, // Używamy 0, jeśli amount jest null
          date: this.budgetForm.date,
          category: this.budgetForm.category,
          type: this.budgetForm.type,
        };
        console.log('Form submitted:', item);
        this.budgetService.addItems(item); // Dodajemy element do serwisu
      } else {
        console.error('Date is required and cannot be null.');
      }

      this.budgetForm = {
        name: '',
        amount: null,
        date: null,
        category: '',
        type: 'przychód' as 'przychód' | 'wydatek',
      }; // Resetujemy formularz
  };

  
  }
}
