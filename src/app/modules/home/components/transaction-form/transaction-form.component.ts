import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TransactionCategory } from 'src/app/shared/models/transaction-category.model';
import { TransactionType } from 'src/app/shared/models/transaction-type.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  @Input() form: FormGroup;

  typeFieldOptions: TransactionType[] = [];
  categoryFieldOptions: TransactionCategory[] = [];

  constructor() {}

  ngOnInit(): void {
    this.typeFieldOptions.push(
      ...[
        new TransactionType({ pkTransactionType: 1, description: 'Despesa' }),
        new TransactionType({ pkTransactionType: 2, description: 'Receita' }),
      ]
    );

    this.categoryFieldOptions.push(
      ...[
        new TransactionCategory({
          pkTransactionCategory: 1,
          description: 'Alimentação',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 2,
          description: 'Educação',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 3,
          description: 'Lazer',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 4,
          description: 'Moradia',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 5,
          description: 'Pagamentos',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 6,
          description: 'Roupa',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 7,
          description: 'Saúde',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 8,
          description: 'Transporte',
          fkTransactionType: 1,
        }),
        new TransactionCategory({
          pkTransactionCategory: 9,
          description: 'Salário',
          fkTransactionType: 2,
        }),
        new TransactionCategory({
          pkTransactionCategory: 10,
          description: 'Presente',
          fkTransactionType: 2,
        }),
        new TransactionCategory({
          pkTransactionCategory: 11,
          description: 'Investimento',
          fkTransactionType: 2,
        }),
        new TransactionCategory({
          pkTransactionCategory: 12,
          description: 'Prêmio',
          fkTransactionType: 2,
        }),
      ]
    );
  }

  categoryOptionsFiltered() {
    return this.categoryFieldOptions.filter(
      (category) => category.fkTransactionType == this.form.get('type').value
    );
  }

  typeFieldChanged() {
    this.form.get('category').setValue(null);
  }
}
