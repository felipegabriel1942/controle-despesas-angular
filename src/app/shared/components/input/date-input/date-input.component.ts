import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;

  constructor() {}

  ngOnInit(): void {
    if (this.control == null) {
      throw new Error('Please inform an control to the DateInputComponent component.');
    }
  }
}
