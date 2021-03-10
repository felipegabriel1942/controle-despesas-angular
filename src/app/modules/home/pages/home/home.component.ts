import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/shared/components/modal/modal.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  addTransactionModalId = 'addTransactionModal';

  transactionForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    value: new FormControl(null, [Validators.required, Validators.min(0)]),
    type: new FormControl('', Validators.required),
    date: new FormControl(this.datepipe.transform(new Date(), 'yyyy-MM-dd'), [
      Validators.required,
    ]),
    category: new FormControl('', Validators.required),
  });

  constructor(private modalService: ModalService, private datepipe: DatePipe) {}

  ngOnInit(): void {}

  openAddTransactionModal() {
    this.modalService.openModal(this.addTransactionModalId);
  }

  closeAddTransactionModal() {
    this.resetTransactionForm();
    this.modalService.closeModal(this.addTransactionModalId);
  }

  resetTransactionForm() {
    this.transactionForm.reset({
      date: this.datepipe.transform(new Date(), 'yyyy-MM-dd')
    });
  }

  addTransaction() {
    console.log(this.transactionForm.value);
    console.log(
      this.formatStringToDate(this.transactionForm.get('date').value)
    );
  }

  formatStringToDate(stringDate: string) {
    return new Date(stringDate + 'T00:00:00');
  }
}
