import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  alertMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createUser(): void {
    this.validateForm();

    const user = this.convertFormToObject();

    this.authenticationService.createUser(user).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => {
        this.alertMessage = JSON.parse(err.error).message;
      },
    });
  }

  convertFormToObject(): User {
    return new User({
      email: this.loginForm.get('email').value,
      userPassword: this.loginForm.get('userPassword').value,
    });
  }

  validateForm(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.alertMessage = 'Preencha os campos corretamente!';
      throw new Error('Invalid form');
    }
  }

  clearAlertMessage(): void {
    this.alertMessage = '';
  }
}
