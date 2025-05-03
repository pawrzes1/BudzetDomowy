
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BudgetItem, BudgetService } from '../../services/budget.service';


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
  onSubmit(form: NgForm) {
    if(form.valid){}
      this.budgetService.addItems({
        id: 0,
        name: this.budgetForm.name,
        amount: Number(this.budgetForm.amount),
        date: new Date(this.budgetForm.date!),
        category: this.budgetForm.category,
        type: this.budgetForm.type,
      }); // Dodajemy nowy element do serwisu budżetowego
      this.resetForm(); // Resetujemy formularz po dodaniu elementu
  }

  resetForm() {
    this.budgetForm = {
      name: '',
      amount: null,
      date: null,
      category: '',
      type: 'przychód' as 'przychód' | 'wydatek',
    };

  }
}
