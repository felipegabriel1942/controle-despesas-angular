import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionMonthReferenceComponent } from './transaction-month-reference.component';

describe('TransactionMonthReferenceComponent', () => {
  let component: TransactionMonthReferenceComponent;
  let fixture: ComponentFixture<TransactionMonthReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionMonthReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionMonthReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
