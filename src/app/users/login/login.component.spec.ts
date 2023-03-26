import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';

import { LoginComponent } from './login.component';

describe('Given the LoginComponent', () => {
  let component: LoginComponent;
  let service: UserService;
  let fixture: ComponentFixture<LoginComponent>;
  const mockUserService = {
    registerUser: () => {},
    logUser: new Observable(),
    token$: new BehaviorSubject({ results: { token: 'test' } }),
  };

  const mockResp = {
    results: {
      token: '',
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [
        {
          provide: UserService,
          useValue: mockUserService,
        },
      ],

      declarations: [LoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    service = TestBed.inject(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When the component is rendered', () => {
    it('Then email field should be empty', () => {
      let email = component.login.controls['email'];
      expect(email.valid).toBeFalsy();
    });
  });

  describe('When the handleSubmit method is called', () => {
    it('Then should submit the login info', () => {
      const handle = spyOn(component, 'handleSubmit').and.callThrough();
      const token = spyOn(service, 'logUser').and.returnValue(of(mockResp));
      component.handleSubmit();
      expect(token).toHaveBeenCalled();
      expect(handle).toHaveBeenCalled();
    });
  });

  it('should handle login error', () => {
    const logError = spyOn(service, 'logUser').and.returnValue(
      throwError(() => 'Invalid credentials')
    );
    const errorMessage = 'Error on login, check your credentials';

    component.handleSubmit();

    expect(logError).toHaveBeenCalled();
    expect(component.errorMessage).toBe(errorMessage);
  });
});
