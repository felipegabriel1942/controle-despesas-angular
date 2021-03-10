import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() type = 'text';

  constructor() {}

  ngOnInit(): void {
    if (this.control == null) {
      throw new Error('Please inform an control to the <app-input> component.');
    }
  }
}
