import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionCategory } from 'src/app/shared/models/transaction-category.model';
import { TransactionType } from 'src/app/shared/models/transaction-type.model';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { StorageKey } from '../../enum/storage-key.enum';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionFormService {
  constructor(
    private datepipe: DatePipe,
    private localStorageService: LocalStorageService
  ) {}

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
    const type = new TransactionType({ id: form.get('type').value });
    const category = new TransactionCategory({
      id: +form.get('category').value,
      type: type,
    });

    const user = this.localStorageService.get(StorageKey.User);

    return new Transaction({
      transactionDate: this.formatStringToDate(form.get('date').value),
      type: type,
      category: category,
      description: form.get('description').value,
      value: +form.get('value').value,
      user: user,
    });
  }

  formatStringToDate(stringDate: string): Date {
    return new Date(stringDate + 'T00:00:00');
  }
}
