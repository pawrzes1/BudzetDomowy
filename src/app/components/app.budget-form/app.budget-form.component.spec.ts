import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBudgetFormComponent } from './app.budget-form.component';

describe('AppBudgetFormComponent', () => {
  let component: AppBudgetFormComponent;
  let fixture: ComponentFixture<AppBudgetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBudgetFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBudgetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
