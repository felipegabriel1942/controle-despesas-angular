import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { ModalComponent } from './components/modal/modal.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputComponent,
    ModalComponent,
    SelectComponent,
    TableComponent,
    SwitchComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    ModalComponent,
    SelectComponent,
    TableComponent,
    SwitchComponent,
  ],
})
export class SharedModule {}
