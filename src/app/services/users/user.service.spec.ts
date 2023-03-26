import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { UserService } from './user.service';
import { User } from 'src/types/types';
import { HttpErrorResponse } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;
  const pass = '1234';

  const user: User = {
    id: '123',
    name: 'pepe',
    surname: 'test',
    email: 'pepe@test',
    password: pass,
  };

  const mockError: HttpErrorResponse = {
    statusText: 'test',
  } as HttpErrorResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When the registerUser method is called', () => {
    it('should return the new registered user', () => {
      service.registerUser(user).subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(user));
      });
      expect(httpTestingController).toBeTruthy();
    });
  });
  describe('When the logUser method is called', () => {
    it('should return the user token', () => {
      service.logUser(user).subscribe((resp) => {
        expect(resp).not.toBeNull();
        expect(JSON.stringify(resp)).toBe(JSON.stringify(user));
      });
      expect(httpTestingController).toBeTruthy();
    });
  });

  describe('When the handleError method is called', () => {
    it('Should return the error message', () => {
      service.handleError(mockError).subscribe({
        error: (error: HttpErrorResponse) => {
          expect(mockError.statusText).toBe('test');
        },
      });
    });
  });
});
