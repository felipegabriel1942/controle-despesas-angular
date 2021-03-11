import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() options: any[];
  @Input() optionLabel: string;
  @Input() optionValue: string;
  @Input() fieldId: string;

  constructor() {}

  ngOnInit(): void {
    if (this.control == null) {
      throw new Error(
        'Please inform an control to the SelectComponent component.'
      );
    }

    if (this.fieldId == null) {
      throw new Error(
        'Please inform an fieldId to the SelectComponent component.'
      );
    }
  }
}
