import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { BudgetItem, BudgetService } from '../../services/budget.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-budget-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './app.budget-list.component.html',
  styleUrl: './app.budget-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBudgetListComponent implements OnInit {
 
  
  constructor(public budgetService: BudgetService) {
    // Inicjalizacja komponentu
  }


  ngOnInit() {
   
  }


}
