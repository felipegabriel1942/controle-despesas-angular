import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor() {}

  openModal(modalId: string) {
    $('#' + modalId).modal();
  }

  closeModal(modalId: string) {
    $('#' + modalId).modal('hide');
  }
}
