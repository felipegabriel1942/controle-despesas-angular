import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './pages/signin/signin.component';
import { LogoComponent } from './components/logo/logo.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
