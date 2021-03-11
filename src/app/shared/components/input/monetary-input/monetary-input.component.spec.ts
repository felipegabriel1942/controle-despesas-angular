import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonetaryInputComponent } from './monetary-input.component';

describe('MonetaryInputComponent', () => {
  let component: MonetaryInputComponent;
  let fixture: ComponentFixture<MonetaryInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonetaryInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonetaryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
