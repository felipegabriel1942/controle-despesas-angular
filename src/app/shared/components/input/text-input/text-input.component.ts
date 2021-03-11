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

  constructor() {}

  ngOnInit(): void {
    if (this.control == null) {
      throw new Error('Please inform an control to the <app-input> component.');
    }
  }
}
