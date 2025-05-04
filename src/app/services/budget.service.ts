import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface BudgetItem {
  id: number;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'przychód' | 'wydatek';
}

const STORAGE_KEY = 'budgetItems'; // Klucz do przechowywania danych w localStorage

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
    const newItem = { ...item, id: Date.now() }; // Tworzymy nowy element budżetowy z unikalnym id
    const updated = [...this.itemsSignal.value, item]; // Tworzymy nową tablicę z dodanym elementem
    this.itemsSignal.next(updated); // Aktualizujemy sygnał
    this.saveToLocalStorage(updated); // Zapisujemy nową tablicę do localStorage
  }

  removeItem(id: number) {
    const updated = this.itemsSignal.value.filter((item) => item.id !== id); // Filtrowanie elementów według id
    this.itemsSignal.next(updated); // Aktualizujemy sygnał
    this.saveToLocalStorage(updated); // Zapisujemy nową tablicę do localStorage
  }
  

  private loadFromLocalStorage() {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const data = localStorage.getItem(STORAGE_KEY); // Pobieramy dane z localStorage
      return data ? JSON.parse(data) : []; // Zwracamy sparsowane dane lub pustą tablicę
    }
    return []; // Zwracamy pustą tablicę, jeśli localStorage nie jest dostępne
  }

  private saveToLocalStorage(items: BudgetItem[]) {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      // Sprawdzamy, czy localStorage jest dostępne
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); // Zapisujemy dane do localStorage
    }
    
  }
  

  constructor() {
    const loaded = this.loadFromLocalStorage(); // Ładujemy dane z localStorage
    this.itemsSignal.next(loaded); // Ustawiamy załadowane dane jako aktualną tablicę budżetową

  }


  categories: string[]= ['Jedzenie', 'Transport', 'Mieszkanie', 'Rozrywka', 'Inne'];
  types: string[] = ['wydatek', 'przychód'];
}

