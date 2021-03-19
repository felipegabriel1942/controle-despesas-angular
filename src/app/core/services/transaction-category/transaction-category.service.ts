import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionCategory } from 'src/app/shared/models/transaction-category.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionCategoryService {

  constructor(private http: HttpClient) { }

  getTransactionCategories(): Observable<any> {
    return this.http.get<TransactionCategory[]>('category');
  }
}
