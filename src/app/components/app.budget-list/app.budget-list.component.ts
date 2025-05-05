import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { BudgetItem, BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'app-budget-list',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './app.budget-list.component.html',
  styleUrls: ['./app.budget-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBudgetListComponent {

  @Output() delete = new EventEmitter<BudgetItem>(); // Emitowanie zdarzenia po usunięciu elementu
  @Output() edit = new EventEmitter<BudgetItem>(); // Emitowanie zdarzenia po edytowaniu elementu\
  
  private budgetService = inject(BudgetService); // Inicjalizacja serwisu budżetowego

  private selectedType$ = new BehaviorSubject<string>(''); // Domyślnie brak wybranego typu
  private selectedCategory$ = new BehaviorSubject<string>(''); // Domyślnie brak wybranej kategorii

  
  filteredItems$: Observable<BudgetItem[]> = combineLatest([
    this.budgetService.items$,
    this.selectedCategory$,
    this.selectedType$,
  ]).pipe(
    map(([items,category, type]) =>
      items.filter(item =>
        (category ? item.category === category : true) && // Filtrowanie elementów według kategorii
        (type ? item.type === type : true) // Filtrowanie elementów według typu
      )
    )
  );

  onCategoryChange(value: Event): void{
    const select = value.target as HTMLSelectElement; // Pobieranie elementu select
    this.selectedCategory$.next(select.value); // Aktualizacja wybranej kategorii
  }

  onTypeChange(event: Event): void{
    const select = event.target as HTMLSelectElement; // Pobieranie elementu select
    this.selectedType$.next(select.value); // Aktualizacja wybranego typu 
  }

  onInit(): void {
    this.budgetService.load(); // Ładowanie danych z localStorage 
  }

  get categories() {
    return this.budgetService.categories; // Pobieranie kategorii z serwisu budżetowego
  }
  get types() {
    return this.budgetService.types; // Pobieranie typów z serwisu budżetowego
  }
  

  onDelete(item: BudgetItem) {
    this.delete.emit(item); // Emitowanie zdarzenia po usunięciu elementu
  }

  onEdit(item: BudgetItem) {
    this.edit.emit(item); // Emitowanie zdarzenia po edytowaniu elementu
  }
  
  
}

