import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './signin.component';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let debugElement: DebugElement;
  let authenticationService: any;
  let router: any;
  let localStorageService: any;

  beforeEach(async () => {
    const authenticationServiceSpy = jasmine.createSpyObj(
      'AuthenticationService',
      ['authenticateUser', 'getUserByEmail']
    );

    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', [
      'clear',
      'set',
    ]);

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [SigninComponent],
      imports: [SharedModule, ReactiveFormsModule],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
    localStorageService = TestBed.inject(LocalStorageService);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid if required fields are empty', () => {
    const email = component.signinForm.get('email');
    const password = component.signinForm.get('password');

    email.setValue('');
    password.setValue('');

    expect(email.errors).toEqual({ required: true });
    expect(password.errors).toEqual({ required: true });
  });

  it('should be invalid when email value is incorret', () => {
    const email = component.signinForm.get('email');

    email.setValue('invalid-email');

    expect(email.errors).toEqual({ email: true });
  });

  it('should make login with success', fakeAsync(() => {
    const response = {
      headers: {
        get: () => {},
      },
    };

    authenticationService.authenticateUser.and.returnValue(of(response));
    authenticationService.getUserByEmail.and.returnValue(of(response));

    component.signinForm.get('email').setValue('pinheiro_felipeg@yahoo.com.br');
    component.signinForm.get('password').setValue('654321');

    const button = debugElement.query(By.css('#login-enter-button'));

    button.nativeElement.click();

    fixture.detectChanges();

    flush();

    expect(router.navigate).toHaveBeenCalledTimes(1);
  }));
});
