import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  transactionForm = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    value: new FormControl(null, [Validators.required, Validators.min(0)]),
    type: new FormControl('', Validators.required),
    date: new FormControl(new Date(), Validators.required),
    category: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  openAddTransactionModal() {
    $('#addTransactionModal').modal();
  }

  closeAddTransactionModal() {
    this.transactionForm.reset();
    $('#addTransactionModal').modal('hide');
  }

  addTransaction() {
    console.log(this.transactionForm.value);
  }
}
