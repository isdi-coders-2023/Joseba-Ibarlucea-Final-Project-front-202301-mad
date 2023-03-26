import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/types/types';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let service: UserService;
  let mockRouter: jasmine.SpyObj<Router>;
  const mockUser: User = {
    id: '33',
    email: 'test@example.com',
    name: 'Yoki',
    surname: 'Some',
    password: '123',
    favoriteTeam: 'Scuderia Ferrari',
  };

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj<Router>(['navigateByUrl']);
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
      providers: [{ provide: Router, useValue: mockRouter }],
      declarations: [RegisterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    service = TestBed.inject(UserService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When ', () => {
    it('should', () => {
      const registerUser = spyOn(service, 'registerUser').and.returnValue(
        of({ user: mockUser })
      );
      component.handleSubmit();

      expect(registerUser).toHaveBeenCalled();
      expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('/login');
    });
  });

  describe('When the method registerUser is called with errors', () => {
    it('Should throw an error', () => {
      const registerError = spyOn(service, 'registerUser').and.returnValue(
        throwError(() => 'Invalid credential')
      );
      const errorMessage = 'Invalid field';

      component.handleSubmit();

      expect(registerError).toHaveBeenCalled();
      expect(component.errorMessage).toBe(errorMessage);
    });
  });
});
