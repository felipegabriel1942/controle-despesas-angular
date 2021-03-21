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
    this.buildTransactionForm();
    this.getTransactions();
  }

  buildTransactionForm(): void {
    this.transactionForm = this.transactionFormService.buildTransactionForm();
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

    console.log(transaction);

    this.transactionService.saveTransaction(transaction).subscribe({
      next: (res) => {
        this.closeAddTransactionModal();
        console.log(res);
      },
    });

    // this.getTransactions();


  }

  getTransactions(): void {
    setTimeout(() => {
      this.transactions = this.transactionService.getTransactions();
    }, 1500);
  }

  closeAddTransactionModal(): void {
    this.clearErrorMessage();
    this.modalService.closeModal(this.addTransactionModalId);
  }

  openAddTransactionModal(): void {
    this.resetTransactionForm();
    this.modalService.openModal(this.addTransactionModalId);
  }

  resetTransactionForm(): void {
    this.transactionFormService.resetTransactionForm(this.transactionForm);
  }

  clearErrorMessage(): void {
    this.errorMessage = '';
  }
}
