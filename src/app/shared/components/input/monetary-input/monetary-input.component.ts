import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-monetary-input',
  templateUrl: './monetary-input.component.html',
  styleUrls: ['./monetary-input.component.css'],
})
export class MonetaryInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() fieldId: string;

  constructor() {}

  ngOnInit(): void {
    if (this.control == null) {
      throw new Error('Please inform an control.');
    }

    if (this.fieldId == null) {
      throw new Error(
        'Please inform an fieldId.'
      );
    }
  }
}
