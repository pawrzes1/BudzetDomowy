import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, FormsModule
  ]
})
export class TransactionModel { }

export interface Transaction {
  id: number;
  name: string;
  amount: number;
  date: Date;
  category: string;
  type: 'income' | 'expense';
}
