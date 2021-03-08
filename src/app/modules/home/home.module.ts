import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { TransactionFilterComponent } from './components/transaction-filter/transaction-filter.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionMonthReferenceComponent } from './components/transaction-month-reference/transaction-month-reference.component';
import { TransactionSummaryComponent } from './components/transaction-summary/transaction-summary.component';
import { TransactionCreationComponent } from './components/transaction-creation/transaction-creation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TransactionFilterComponent,
    TransactionListComponent,
    TransactionMonthReferenceComponent,
    TransactionSummaryComponent,
    TransactionCreationComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
})
export class HomeModule {}
