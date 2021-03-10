import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { CardSummaryComponent } from './components/card-summary/card-summary.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

@NgModule({
  declarations: [HomeComponent, CardSummaryComponent, TransactionFormComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, ReactiveFormsModule],
  providers: [DatePipe],
})
export class HomeModule {}
