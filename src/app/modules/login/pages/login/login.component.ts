import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageKey } from 'src/app/core/enum/storage-key.enum';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
  });

  alertMessage: string;
  signUpMode: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clearLocalStorage();
  }

  clearLocalStorage(): void {
    this.localStorage.clear();
  }

  authenticateUser(): void {
    this.validateForm();

    const user = this.convertFormToObject();

    this.authenticationService.authenticateUser(user).subscribe({
      next: (res: any) => {
        this.saveTokenOnLocalStorage(res);
        this.navigateToHomePage();
      },
      error: (err) => {
        if (err.status === 403) {
          this.alertMessage = 'E-mail ou senha inválidos.';
        }
      },
    });
  }

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

  validateForm(): void {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      this.alertMessage = 'Preencha os campos corretamente!';
      throw new Error('Invalid form');
    }
  }

  convertFormToObject(): User {
    return new User({
      email: this.loginForm.get('email').value,
      userPassword: this.loginForm.get('userPassword').value,
    });
  }

  navigateToHomePage(): void {
    this.router.navigate(['/home']);
  }

  saveTokenOnLocalStorage(res: any): void {
    this.localStorage.set(StorageKey.Token, res.headers.get('Authorization'));
  }

  clearAlertMessage(): void {
    this.alertMessage = '';
  }

  toogleSigupMode(): void {
    this.signUpMode = !this.signUpMode;
    this.loginForm.reset();
    this.toogleConfirmPasswordField();
  }

  toogleConfirmPasswordField(): void {
    if (this.signUpMode) {
      this.loginForm.get('confirmPassword').enable();
    } else {
      this.loginForm.get('confirmPassword').disable();
    }
  }
}
