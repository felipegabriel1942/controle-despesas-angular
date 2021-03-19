import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionType } from 'src/app/shared/models/transaction-type.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionTypeService {

  constructor(private http: HttpClient) { }

  getTransactionTypes(): Observable<any> {
    return this.http.get<TransactionType[]>('type');
  }
}
