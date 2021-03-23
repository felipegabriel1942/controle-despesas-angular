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
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { LocalStorageService } from 'src/app/core/services/local-storage/local-storage.service';
import { SharedModule } from 'src/app/shared/shared.module';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let debugElement: DebugElement;
  let authenticationService: any;
  let router: any;
  let localStorageService: any;
  let toast: any;

  beforeEach(async () => {
    const authenticationServiceSpy = jasmine.createSpyObj(
      'AuthenticationService',
      ['createUser']
    );

    const localStorageServiceSpy = jasmine.createSpyObj('LocalStorageService', [
      'clear',
      'set',
    ]);

    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    const toastSpy = jasmine.createSpyObj('ToastService', ['success']);

    await TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [SharedModule, ReactiveFormsModule],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: Router, useValue: routerSpy },
        { provide: LocalStorageService, useValue: localStorageServiceSpy },
        { provide: ToastrService, useValue: toastSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    authenticationService = TestBed.inject(AuthenticationService);
    router = TestBed.inject(Router);
    localStorageService = TestBed.inject(LocalStorageService);
    toast = TestBed.inject(ToastrService);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be invalid if required fields are empty', () => {
    component.signupForm.get('email').setValue('');
    component.signupForm.get('password').setValue('');
    component.signupForm.get('passwordConfirmation').setValue('');

    expect(component.signupForm.get('email').errors).toEqual({
      required: true,
    });
    expect(component.signupForm.get('password').errors).toEqual({
      required: true,
    });
    expect(component.signupForm.get('passwordConfirmation').errors).toEqual({
      required: true,
    });

    const button = debugElement.query(By.css('#signup-createuser-button'));

    button.nativeElement.click();

    fixture.detectChanges();

    expect(router.navigate).toHaveBeenCalledTimes(0);
  });

  it('should be invalid when password and passwordConfirmation are diferent', () => {
    component.signupForm.get('email').setValue('pinheiro_felipeg@yahoo.com.br');
    component.signupForm.get('password').setValue('123');
    component.signupForm.get('passwordConfirmation').setValue('321');

    expect(component.signupForm.errors).toEqual({
      passwordsDontMatch: true,
    });
  });

  it('should create a user with success', fakeAsync(() => {
    authenticationService.createUser.and.returnValue(of(null));

    component.signupForm.get('email').setValue('pinheiro_felipeg@yahoo.com.br');
    component.signupForm.get('password').setValue('654321');
    component.signupForm.get('passwordConfirmation').setValue('654321');

    const button = debugElement.query(By.css('#signup-createuser-button'));

    button.nativeElement.click();

    fixture.detectChanges();

    flush();

    expect(router.navigate).toHaveBeenCalledTimes(1);
  }));
});
