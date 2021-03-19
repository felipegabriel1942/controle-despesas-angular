import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { AuthGuard } from './guards/auth.guard';
import { ApiPrefixInterceptor } from './interceptors/api-prefix.interceptor';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
  exports: [HeaderComponent],
  providers: [
    DatePipe,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: ApiPrefixInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
