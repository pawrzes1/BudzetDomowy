import { Component, EventEmitter, inject, Input, input, OnChanges, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';



export interface BudgetItem {
  id: number;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'przychód' | 'wydatek';
}

@Component({
  selector: 'app-budget-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.budget-form.component.html',
})
export class AppBudgetFormComponent implements OnChanges {
  @Input() itemToEdit: BudgetItem | null = null; // Element do edytowania
  @Output() save = new EventEmitter<BudgetItem>(); // Emitowanie zdarzenia po zapisaniu elementu

  form!: FormGroup; // Formularz
  budgetService: BudgetService = inject(BudgetService); // Inicjalizacja serwisu budżetowego
  // Inicjalizacja formularza z domyślnymi wartościami

 constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    name: ['', Validators.required],
    amount: [null, [Validators.required, Validators.min(0.01)]],
    date: [new Date().toISOString().split('T')[0], Validators.required], // Ustawienie domyślnej daty na dzisiaj
    category: ['', Validators.required],
    type: ['wydatek', Validators.required]  // domyślnie wydatek
  });} // Inicjalizacja formularza


  ngOnChanges(){
    if(this.itemToEdit){
      this.form.patchValue(this.itemToEdit); // Ustawienie wartości formularza na edytowany element
    }
  }


  submit() {
    if (this.form.valid) {
      const item = this.itemToEdit
        ? { ...this.itemToEdit, ...this.form.value } // Jeśli edytujemy element, to aktualizujemy jego wartości
        : { ...this.form.value, id: Date.now() }; // Jeśli dodajemy nowy element, to generujemy nowe id
      this.save.emit(item); // Emitowanie zdarzenia z nowym elementem
      this.form.reset(); // Resetowanie formularza po zapisaniu
      }
  }

  categories() {
    return this.budgetService.categories; // Pobieranie kategorii z serwisu budżetowego
  }
}
