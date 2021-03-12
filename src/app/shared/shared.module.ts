import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './components/modal/modal.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { DateInputComponent } from './components/input/date-input/date-input.component';
import { MonetaryInputComponent } from './components/input/monetary-input/monetary-input.component';
import { TextInputComponent } from './components/input/text-input/text-input.component';
import { AlertComponent } from './components/alert/alert.component';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
@NgModule({
  declarations: [
    ModalComponent,
    SelectComponent,
    TableComponent,
    SwitchComponent,
    DateInputComponent,
    MonetaryInputComponent,
    TextInputComponent,
    AlertComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskModule.forRoot()],
  exports: [
    TextInputComponent,
    ModalComponent,
    SelectComponent,
    TableComponent,
    SwitchComponent,
    TextInputComponent,
    DateInputComponent,
    MonetaryInputComponent,
    AlertComponent,
  ],
})
export class SharedModule {}
