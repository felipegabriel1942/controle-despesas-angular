import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransactionCategoryService } from 'src/app/core/services/transaction-category/transaction-category.service';
import { TransactionTypeService } from 'src/app/core/services/transaction-type/transaction-type.service';
import { TransactionCategory } from 'src/app/shared/models/transaction-category.model';
import { TransactionType } from 'src/app/shared/models/transaction-type.model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  @Input() form: FormGroup;

  typeOptions: TransactionType[] = [];
  categoryOptions: TransactionCategory[] = [];

  constructor(
    private transactionCategoryService: TransactionCategoryService,
    private transactionTypeService: TransactionTypeService
  ) {}

  ngOnInit(): void {
    const category$ = this.transactionCategoryService.getTransactionCategories();
    const type$ = this.transactionTypeService.getTransactionTypes();

    forkJoin([category$, type$])
      .pipe(
        map((res) => {
          this.categoryOptions = res[0] as TransactionCategory[];
          this.typeOptions = res[1] as TransactionType[];
        })
      )
      .subscribe(() => {});
  }

  categoryOptionsFiltered(): TransactionCategory[] {
    return this.categoryOptions.filter(
      (category) => +category.type.id === +this.form.get('type').value
    );
  }

  typeFieldChanged(): void {
    this.form.get('category').setValue(null);
  }
}
