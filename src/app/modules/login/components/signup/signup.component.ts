import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { User } from 'src/app/shared/models/user.model';
import { MatchPassword } from 'src/app/shared/validators/match-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      passwordConfirmation: new FormControl('', [Validators.required]),
    },
    {
      validators: [this.matchPassword.validate],
    }
  );

  constructor(
    private matchPassword: MatchPassword,
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
      },
    });
  }

  convertFormToObject(): User {
    return new User({
      email: this.signupForm.get('email').value,
      userPassword: this.signupForm.get('password').value,
    });
  }

  validateForm(): void {
    this.signupForm.markAllAsTouched();

    if (this.signupForm.invalid) {
      throw new Error('Invalid form');
    }
  }

  navigateToSigninPage(): void {
    this.router.navigate(['/']);
  }

  showPasswordDontMatchAlert(): boolean {
    return (
      this.signupForm.errors != null &&
      this.signupForm.get('password').touched &&
      this.signupForm.get('passwordConfirmation').touched
    );
  }
}
