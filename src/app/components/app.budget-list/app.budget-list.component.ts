import { Component, OnInit } from '@angular/core';
import { BudgetItem, BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-list',
  imports: [CommonModule],
  providers: [BudgetService],
  standalone: true,
  templateUrl: './app.budget-list.component.html',
  styleUrl: './app.budget-list.component.css'
})
export class AppBudgetListComponent implements OnInit {
  // Przykładowe dane budżetowe
  budgetItems: BudgetItem [] = [
    {
      id: 1,
      name: 'Zakupy spożywcze',
      amount: 200,
      date: new Date('2023-10-01'),
      category: 'Jedzenie',
      type: 'wydatek'
    },
    {
      id: 2,
      name: 'Wynagrodzenie',
      amount: 5000,
      date: new Date('2023-10-05'),
      category: 'Praca',
      type: 'przychód'
    },
    {
      id: 3,
      name: 'Bilet do kina',
      amount: 50,
      date: new Date('2023-10-10'),
      category: 'Rozrywka',
      type: 'wydatek'
    }
  ];

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    // Inicjalizacja komponentu
    this.budgetItems = this.budgetService.getItems();
  }



}
