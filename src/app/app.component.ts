import { Component } from '@angular/core';
import { BudgetService } from './services/budget.service';
import { AppBudgetListComponent } from './components/app.budget-list/app.budget-list.component';
import { AppBudgetFormComponent } from './components/app.budget-form/app.budget-form.component';


@Component({
  standalone: true,
  imports: [AppBudgetListComponent, AppBudgetFormComponent], // Import the BudgetFormComponent here
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budzet-domowy';
}
