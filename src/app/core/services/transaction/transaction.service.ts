import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  saveTransaction(transaction: Transaction): void {
    const transactions = this.getTransactions();
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }

  getTransactions(): any[] {
    if (localStorage.getItem('transactions')) {
      return JSON.parse(localStorage.getItem('transactions'));
    }

    return [];
  }
}
