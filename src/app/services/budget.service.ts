import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
 
  private budgetItems: BudgetItem[] = [
    {
      id: 1,
      name: 'Zakupy spożywcze',
      amount: 200,
      date: new Date('2023-10-01'),
      category: 'Jedzenie',
      type: 'wydatek'
    },
    {
      id: 2,
      name: 'Wynagrodzenie',
      amount: 5000,
      date: new Date('2023-10-05'),
      category: 'Praca',
      type: 'przychód'
    },
    {
      id: 3,
      name: 'Bilet do kina',
      amount: 50,
      date: new Date('2023-10-10'),
      category: 'Rozrywka',
      type: 'wydatek'
    }
  ];

  getItems() {
    return this.budgetItems;
  }

  addItems(item: BudgetItem) {
    this.budgetItems.push(item);
  }

  removeItem(id: number) {
    this.budgetItems = this.budgetItems.filter(item => item.id !== id);
  }

  constructor() {

  }
}

export interface BudgetItem {
  id: number;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'przychód' | 'wydatek';
}