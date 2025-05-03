import { Component, inject, OnInit } from '@angular/core';
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
  private budgetService = inject(BudgetService); // Inicjalizacja serwisu budżetowego
  
  budgetItems = this.budgetService.getItems(); // Inicjalizacja tablicy budżetowej


  

  

  ngOnInit() {
    // Inicjalizacja komponentu
  
  }

  ngDoCheck(){
    // Sprawdzanie zmian w danych budżetowych
    this.budgetItems = this.budgetService.getItems();
  }

}
