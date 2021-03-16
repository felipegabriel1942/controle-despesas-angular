import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  @Input() message;
  @Input() type;

  @Output() onAlertClear = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (this.type == null) {
      throw new Error('Please inform an type.');
    }
  }

  get alertTypeClass(): string {
    if (this.type === 'success') {
      return 'alert-success';
    }

    if (this.type === 'error') {
      return 'alert-danger';
    }

    return 'alert-primary';
  }
}
