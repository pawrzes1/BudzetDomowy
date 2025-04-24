import { Component } from '@angular/core';
import { BudgetFormComponent } from './components/app.budget-form/app.budget-form.component'; // Adjust the import path as necessary
import { BudgetService } from './services/budget.service'; // Adjust the import path as necessary

@Component({
  standalone: true,
  imports: [BudgetFormComponent], // Import the BudgetFormComponent here

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'budzet-domowy';
}
