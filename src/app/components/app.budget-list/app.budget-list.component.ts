import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BudgetItem, BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget-list',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.budget-list.component.html',
  styleUrl: './app.budget-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBudgetListComponent {
  
  private budgetService = inject(BudgetService); // Inicjalizacja serwisu budżetowego
  
  selectedType: string = ''; // Domyślnie brak wybranego typu
  selectedCategory: string = ''; // Domyślnie brak wybranej kategorii

  filterByType(item: BudgetItem): boolean {
    return this.selectedType === item.type; // Filtrowanie elementów według wybranego typu
  }
  filterByCategory(item: BudgetItem): boolean {
    return this.selectedCategory === '' || item.category === this.selectedCategory; // Filtrowanie elementów według wybranej kategorii
  }


  
  itemsList: BudgetItem[] = []; // Local variable to store items

  constructor() {
    this.budgetService.items$.subscribe((items) => {
      this.itemsList = items; // Subskrypcja na zmiany w tablicy budżetowej
    });
  }

  get items() {
    return this.budgetService.items; // Pobieranie elementów budżetowych z serwisu
  }
  get categories() {
    return this.budgetService.categories; // Pobieranie kategorii z serwisu budżetowego
  }
  get types() {
    return this.budgetService.types; // Pobieranie typów z serwisu budżetowego
  }
   
filteredItems(){
    return this.items.filter(item => 
      (this.selectedCategory ? item.category === this.selectedCategory :true) && // Filtrowanie elementów według kategorii
      (this.selectedType ? item.type === this.selectedType : true) // Filtrowanie elementów według typu
    );
    }
}

