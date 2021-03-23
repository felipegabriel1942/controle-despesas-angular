import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/shared/models/transaction.model';
import { User } from 'src/app/shared/models/user.model';
import { StorageKey } from '../../enum/storage-key.enum';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  saveTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>('transaction', transaction);
  }

  getTransactions(): Observable<any> {
    const user = this.localStorageService.get(StorageKey.User) as User;

    return this.http.get<any>(`transaction?userId=${user.id}`);
  }
}
