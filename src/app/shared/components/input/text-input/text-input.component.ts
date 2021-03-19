import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css'],
})
export class TextInputComponent implements OnInit {
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


  isValid() {
    return this.control?.valid || this.control?.untouched;
  }
}
