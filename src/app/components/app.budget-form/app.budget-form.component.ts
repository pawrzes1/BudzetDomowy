
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  imports: [CommonModule, FormsModule],
  templateUrl: './app.budget-form.component.html',
  styleUrl: './app.budget-form.component.css',
  standalone: true,
  selector: 'app-budget-form',
})
export class BudgetFormComponent {

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
      type: 'przychód' as 'przychód' | 'wydatek',
    }; 

  console.log('Form reset:', this.budgetForm);

  }
}
