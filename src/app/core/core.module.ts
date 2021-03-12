import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [HeaderComponent],
  providers: [DatePipe],
})
export class CoreModule {}
