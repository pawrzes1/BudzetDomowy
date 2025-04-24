import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBudgetSumaryComponent } from './app.budget-sumary.component';

describe('AppBudgetSumaryComponent', () => {
  let component: AppBudgetSumaryComponent;
  let fixture: ComponentFixture<AppBudgetSumaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBudgetSumaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBudgetSumaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
