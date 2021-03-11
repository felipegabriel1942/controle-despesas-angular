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
        new TransactionType({ id: 1, description: 'Despesa' }),
        new TransactionType({ id: 2, description: 'Receita' }),
      ]
    );

    this.categoryFieldOptions.push(
      ...[
        new TransactionCategory({
          id: 1,
          description: 'Alimentação',
          type: 1,
        }),
        new TransactionCategory({
          id: 2,
          description: 'Educação',
          type: 1,
        }),
        new TransactionCategory({
          id: 3,
          description: 'Lazer',
          type: 1,
        }),
        new TransactionCategory({
          id: 4,
          description: 'Moradia',
          type: 1,
        }),
        new TransactionCategory({
          id: 5,
          description: 'Pagamentos',
          type: 1,
        }),
        new TransactionCategory({
          id: 6,
          description: 'Roupa',
          type: 1,
        }),
        new TransactionCategory({
          id: 7,
          description: 'Saúde',
          type: 1,
        }),
        new TransactionCategory({
          id: 8,
          description: 'Transporte',
          type: 1,
        }),
        new TransactionCategory({
          id: 9,
          description: 'Salário',
          type: 2,
        }),
        new TransactionCategory({
          id: 10,
          description: 'Presente',
          type: 2,
        }),
        new TransactionCategory({
          id: 11,
          description: 'Investimento',
          type: 2,
        }),
        new TransactionCategory({
          id: 12,
          description: 'Prêmio',
          type: 2,
        }),
      ]
    );
  }

  categoryOptionsFiltered() {
    return this.categoryFieldOptions.filter(
      (category) => category.type == this.form.get('type').value
    );
  }

  typeFieldChanged() {
    this.form.get('category').setValue(null);
  }
}
