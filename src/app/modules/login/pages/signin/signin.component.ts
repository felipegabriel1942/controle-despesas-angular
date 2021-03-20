import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { StorageKey } from 'src/app/core/enum/storage-key.enum';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

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
    if (!this.validateForm()) {
      return;
    }

    const user = this.convertFormToObject();

    const join$ = forkJoin([
      this.authenticationService.authenticateUser(user),
      this.authenticationService.getUserByEmail(user.email),
    ]);

    join$
      .pipe(
        map((res) => {
          this.saveTokenOnLocalStorage(res[0]);
          this.saveUserOnLocalStorage(res[1]);
        })
      )
      .subscribe(() => {
        this.navigateToHomePage();
      });
  }

  validateForm(): boolean {
    this.signinForm.markAllAsTouched();
    return this.signinForm.valid;
  }

  saveTokenOnLocalStorage(res: any): void {
    this.localStorage.set(StorageKey.Token, res.headers.get('Authorization'));
  }

  saveUserOnLocalStorage(user: any): void {
    this.localStorage.set(StorageKey.User, user);
  }

  convertFormToObject(): User {
    return new User({
      email: this.signinForm.get('email').value,
      userPassword: this.signinForm.get('password').value,
    });
  }

  navigateToHomePage(): void {
    this.router.navigate(['/home']);
  }
}
