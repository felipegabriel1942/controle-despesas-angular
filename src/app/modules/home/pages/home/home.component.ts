import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  addTransactionModalId = 'addTransactionModal';
  transactionList: Transaction[] = [];
  errorMessage = '';

  transactionForm = new FormGroup({
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

  constructor(private modalService: ModalService, private datepipe: DatePipe) {}

  ngOnInit(): void {}

  openAddTransactionModal(): void {
    this.resetTransactionForm();
    this.modalService.openModal(this.addTransactionModalId);
  }

  resetTransactionForm(): void {
    this.transactionForm.reset({
      date: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
      type: 1,
    });
  }

  addTransaction(): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      this.errorMessage = 'Preencha todos os campos corretamente!';
      return;
    }

    const transaction = new Transaction({
      id: 1,
      date: this.formatStringToDate(this.transactionForm.get('date').value),
      type: this.transactionForm.get('type').value,
      category: +this.transactionForm.get('category').value,
      description: this.transactionForm.get('description').value,
      value: +this.transactionForm.get('value').value,
    });

    this.transactionList.push(transaction);

    this.closeAddTransactionModal();
  }

  formatStringToDate(stringDate: string): Date {
    return new Date(stringDate + 'T00:00:00');
  }

  closeAddTransactionModal(): void {
    this.clearErrorMessage();
    this.modalService.closeModal(this.addTransactionModalId);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }
}
