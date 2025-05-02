import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
 
  private budgetItems: BudgetItem[] = [];

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