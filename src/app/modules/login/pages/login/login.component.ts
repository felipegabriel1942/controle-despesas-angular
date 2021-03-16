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
  });

  errorMessage: string;

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
      error: () => {},
    });
  }

  validateForm(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Preencha os campos corretamente!';
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

  clearErrorMessage(): void {
    this.errorMessage = '';
  }
}
