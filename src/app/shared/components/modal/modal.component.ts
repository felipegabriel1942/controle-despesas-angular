import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalId;

  constructor() { }

  ngOnInit(): void {
    if(this.modalId == null) {
      throw new Error('Please inform an "modalId" to the ModalComponent component.');
    }
  }

}
