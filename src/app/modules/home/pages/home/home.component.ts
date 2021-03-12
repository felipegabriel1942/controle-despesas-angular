import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ModalService } from 'src/app/shared/components/modal/modal.service';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { TransactionFormService } from 'src/app/core/services/transaction/transaction-form.service';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  addTransactionModalId = 'addTransactionModal';
  transactions: Transaction[] = [];
  errorMessage = '';
  transactionForm: FormGroup;

  constructor(
    private modalService: ModalService,
    private transactionService: TransactionService,
    private transactionFormService: TransactionFormService
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.transactionFormService.buildTransactionForm();

    setTimeout(() => {
      this.transactions = this.transactionService.getTransactions();
    }, 1500);
  }

  openAddTransactionModal(): void {
    this.resetTransactionForm();
    this.modalService.openModal(this.addTransactionModalId);
  }

  resetTransactionForm(): void {
    this.transactionFormService.resetTransactionForm(this.transactionForm);
  }

  addTransaction(): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      this.errorMessage = 'Preencha todos os campos corretamente!';
      return;
    }

    const transaction = this.transactionFormService.convertFormToObject(
      this.transactionForm
    );

    setTimeout(() => {
      this.transactionService.saveTransaction(transaction);
      this.transactions = this.transactionService.getTransactions();
    }, 1500);

    this.closeAddTransactionModal();
  }

  closeAddTransactionModal(): void {
    this.clearErrorMessage();
    this.modalService.closeModal(this.addTransactionModalId);
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }
}
