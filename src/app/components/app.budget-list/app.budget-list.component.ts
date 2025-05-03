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
  budgetItems: BudgetItem [] = [];
  

  constructor(private budgetService: BudgetService) {}

  ngOnInit() {
    // Inicjalizacja komponentu
    this.budgetItems = this.budgetService.getItems();
  }



}
