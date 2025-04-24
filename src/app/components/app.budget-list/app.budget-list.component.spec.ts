import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBudgetListComponent } from './app.budget-list.component';

describe('AppBudgetListComponent', () => {
  let component: AppBudgetListComponent;
  let fixture: ComponentFixture<AppBudgetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBudgetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBudgetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
