import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private transactions: any[] = []; // Replace 'any' with your actual transaction type
  private budget: number = 0; // Replace with your actual budget type

  private categories: string[] = []; // Replace with your actual categories type
  private selectedCategory: string = ''; // Replace with your actual selected category type 

  private selectedType: 'income' | 'expense' = 'income'; // Replace with your actual selected type
  private selectedDate: Date | null = null; // Replace with your actual selected date type
  private selectedTransaction: any | null = null; // Replace with your actual selected transaction type
  private selectedTransactionId: number | null = null; // Replace with your actual selected transaction ID type
  private selectedTransactionName: string = ''; // Replace with your actual selected transaction name type
  private selectedTransactionAmount: number | null = null; // Replace with your actual selected transaction amount type
  private selectedTransactionDate: Date | null = null; // Replace with your actual selected transaction date type
  private selectedTransactionCategory: string = ''; // Replace with your actual selected transaction category type


  constructor() {
    // Initialize the service with default values if needed
    this.transactions = []; // Initialize with an empty array or fetch from a server
    this.budget = 0; // Initialize with a default budget value
    this.categories = []; // Initialize with an empty array or fetch from a server
    this.selectedCategory = ''; // Initialize with an empty string or fetch from a server
    this.selectedType = 'income'; // Initialize with a default type
    this.selectedDate = null; // Initialize with null or fetch from a server
    this.selectedTransaction = null; // Initialize with null or fetch from a server
    this.selectedTransactionId = null; // Initialize with null or fetch from a server
    this.selectedTransactionName = ''; // Initialize with an empty string or fetch from a server
    this.selectedTransactionAmount = null; // Initialize with null or fetch from a server
    this.selectedTransactionDate = null; // Initialize with null or fetch from a server
    this.selectedTransactionCategory = ''; // Initialize with an empty string or fetch from a server
   }
}
