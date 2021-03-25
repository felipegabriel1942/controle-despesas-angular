import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transaction } from 'src/app/shared/models/transaction.model';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css'],
})
export class TransactionTableComponent implements OnInit {
  @Input() transactions: Transaction[] = [];
  @Output() onDeleteTransaction = new EventEmitter<any>();
  @Output() onEditTransaction = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  typeTransactionBadgeClass(transaction: Transaction): string {
    if (transaction.type.description === 'Despesa') {
      return 'badge-danger';
    }

    if (transaction.type.description === 'Receita') {
      return 'badge-success';
    }

    return null;
  }
}
