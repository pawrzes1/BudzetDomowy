import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
 
  private itemsSignal = new BehaviorSubject<any[]>([]); // Inicjalizacja sygnału z pustą tablicą
  items$ = this.itemsSignal.asObservable(); // Tworzenie obserwowalnej wersji sygnału

  get items() {
    // Getter do pobierania aktualnej tablicy budżetowej
    return this.itemsSignal.value; // Zwracamy aktualną tablicę budżetową
  }

  addItems(item: any) {
    const current = this.itemsSignal.value; // Pobieramy aktualną tablicę budżetową
    this.itemsSignal.next([...current, 
        {...item, id: current.length + 1} // Dodajemy nowy element z unikalnym ID
      ]); // Dodajemy nowy element do tablicy
  }

  

  constructor() {
    // Inicjalizacja serwisu budżetowego
    this.itemsSignal.next([
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

  categories: string[]= ['Jedzenie', 'Transport', 'Mieszkanie', 'Rozrywka', 'Inne'];
  types: string[] = ['wydatek', 'przychód'];
}

