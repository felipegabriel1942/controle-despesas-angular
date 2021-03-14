import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
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

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {}

  authenticateUser(): void {
    if (this.loginForm.invalid) {
      return;
    }

    const user = new User({
      email: this.loginForm.get('email').value,
      userPassword: this.loginForm.get('userPassword').value,
    });

    this.authenticationService.authenticateUser(user).subscribe({
      next: (res: any) => {
        console.log(res.headers.get('Authorization'));
      },
      error: () => {},
    });
  }
}
