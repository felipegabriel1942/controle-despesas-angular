import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransactionType } from 'src/app/shared/models/transaction-type.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  @Input() form: FormGroup;

  typeFieldOptions: TransactionType[] = [];

  constructor() {}

  ngOnInit(): void {
    this.typeFieldOptions.push(
      ...[
        new TransactionType({ pkTransactionType: 1, description: 'Despesa' }),
        new TransactionType({ pkTransactionType: 2, description: 'Receita' }),
      ]
    );
  }
}
