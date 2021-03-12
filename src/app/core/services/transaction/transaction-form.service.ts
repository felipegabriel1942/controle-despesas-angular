import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionFormService {
  constructor(private datepipe: DatePipe) {}

  buildTransactionForm(): FormGroup {
    return new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
      ]),
      value: new FormControl(null, [Validators.required, Validators.min(0)]),
      type: new FormControl(1, Validators.required),
      date: new FormControl(this.datepipe.transform(new Date(), 'yyyy-MM-dd'), [
        Validators.required,
      ]),
      category: new FormControl(null, Validators.required),
    });
  }

  resetTransactionForm(form: FormGroup): void {
    form.reset({
      date: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      type: 1,
    });
  }

  convertFormToObject(form: FormGroup): Transaction {
    return new Transaction({
      date: this.formatStringToDate(form.get('date').value),
      type: form.get('type').value,
      category: +form.get('category').value,
      description: form.get('description').value,
      value: +form.get('value').value,
    });
  }

  formatStringToDate(stringDate: string): Date {
    return new Date(stringDate + 'T00:00:00');
  }
}
