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


@Injectable({
  providedIn: 'root'
})

export class BudgetService {
  private readonly STORAGE_KEY = 'budgetItems'; // Klucz do localStorage
  private itemsSubject = new BehaviorSubject<BudgetItem[]>([]); // Inicjalizacja sygnału z pustą tablicą
  items$ = this.itemsSubject.asObservable(); // Tworzenie obserwowalnej wersji sygnału

  
load(): void{
  if(typeof localStorage !== 'undefined'){
    const stored = localStorage.getItem('budgetItems'); // Pobieranie danych z localStorage
    const items = stored ? JSON.parse(stored) : []; // Parsowanie danych lub zwracanie pustej tablicy
    this.itemsSubject.next(items); // Aktualizacja sygnału
    console.log('Wczytano elementy z localStorage:', items); // Logowanie wczytanych elementów
  
  }
}
  save(item: BudgetItem): void{
    const current = this.itemsSubject.value; // Pobieranie aktualnej wartości sygnału
    const updated = [...current, item]; // Tworzenie nowej tablicy z aktualnymi elementami i nowym elementem
    this.itemsSubject.next(updated); // Aktualizacja sygnału
    this.persist(updated); // Zapis nowej tablicy do localStorage
  }

  delete(item: BudgetItem): void{
    const current = this.itemsSubject.value; // Pobieranie aktualnej wartości sygnału
    const updated = current.filter(i => i.id !== item.id); // Tworzenie nowej tablicy bez usuniętego elementu
    this.itemsSubject.next(updated); // Aktualizacja sygnału
    this.persist(updated); // Zapis nowej tablicy do localStorage
  }

  private persist(items: BudgetItem[]): void{
    if(typeof localStorage !== 'undefined'){
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(items)); // Zapis danych do localStorage
    }
  }



  categories: string[]= ['Jedzenie', 'Transport', 'Mieszkanie', 'Rozrywka', 'Inne'];
  types: string[] = ['wydatek', 'przychód'];
}

