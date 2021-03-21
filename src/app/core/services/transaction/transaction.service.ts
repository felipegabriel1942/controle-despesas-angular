import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private http: HttpClient) {}

  saveTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>('transaction', transaction);
  }

  getTransactions(): any[] {
    if (localStorage.getItem('transactions')) {
      return JSON.parse(localStorage.getItem('transactions'));
    }

    return [];
  }
}
