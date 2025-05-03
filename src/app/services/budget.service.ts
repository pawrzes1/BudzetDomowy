import { Injectable, signal } from '@angular/core';

export interface BudgetItem {
  id: number;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'przychód' | 'wydatek';
}


@Injectable({
  providedIn: 'root'
})

export class BudgetService {
 
  private itemsSignal = signal<BudgetItem[]>([]); // Inicjalizacja sygnału z pustą tablicą

  getItems() {
    // Zwracamy kopię tablicy, aby uniknąć modyfikacji oryginalnej tablicy
    return this.itemsSignal.asReadonly(); // Zwracamy aktualną tablicę budżetową
  }

  addItems(item: BudgetItem) {
    const current = this.itemsSignal(); // Pobieramy aktualną tablicę budżetową
    this.itemsSignal.set([...current, 
        {...item, id: current.length + 1} // Dodajemy nowy element z unikalnym ID
      ]); // Dodajemy nowy element do tablicy
  }

  

  constructor() {

  }
}

