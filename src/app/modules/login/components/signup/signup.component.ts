import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
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

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  createUser(): void {
    this.validateForm();

    const user = this.convertFormToObject();

    this.authenticationService.createUser(user).subscribe({
      next: () => {
        this.navigateToSigninPage();
        this.toastr.success('', 'Usuário cadastrado com sucesso.', {
          progressBar: true,
        });
      }
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
      throw new Error('Invalid form');
    }
  }

  navigateToSigninPage(): void {
    this.router.navigate(['/']);
  }
}
