import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.css'],
})
export class CardSummaryComponent implements OnInit {
  @Input() title: string;
  @Input() value: string;
  @Input() valueClass = '';
  constructor() {}

  ngOnInit(): void {}
}
