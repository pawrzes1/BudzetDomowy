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

  get items() {
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
    // Inicjalizacja serwisu budżetowego
    this.itemsSignal.set([
      {
        id: 1,
        name: 'Zakupy spożywcze',
        amount: 200,
        date: new Date('2023-10-01'),
        category: 'Jedzenie',
        type: 'wydatek',
      },
      {
        id: 2,
        name: 'Pensja',
        amount: 5000,
        date: new Date('2023-10-05'),
        category: 'Praca',
        type: 'przychód',
      },
    ]); // Inicjalizacja przykładowych danych
    
  }
}

