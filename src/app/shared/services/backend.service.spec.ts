import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { BackendService } from './backend.service';

describe('BackendService', () => {
  let service: BackendService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [BackendService]
    });
    service = TestBed.inject(BackendService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('has a "get" method that', () => {

    it('should make a GET request and parse and return the response payload.', async () => {
      const expected = [
        { id: 1 },
        { id: 2 }
      ];

      service.get('/users').subscribe(actual => {
        if (!Array.isArray(actual)) {
          throw new Error('The response payload should be an array.');
        }
        expect(actual.length).toBe(2);
        expect(actual).toEqual(expected);
      });

      const req = httpTestingController.expectOne('/users');
      expect(req.request.method).toBe('GET');
      req.flush(expected);
    });

  });

  describe('has a "post" method that', () => {

    it('should make a POST request with the given data and parse and return the response payload.', async () => {
      const expectedUsers = [
        { id: 1 },
        { id: 2 }
      ];
      const expectedRequestBody = {
        foo: 'bar'
      };

      service.post('/users', expectedRequestBody).subscribe(actual => {
        if (!Array.isArray(actual)) {
          throw new Error('The response payload should be an array.');
        }
        expect(actual.length).toBe(2);
        expect(actual).toEqual(expectedUsers);
      });

      const req = httpTestingController.expectOne('/users');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(expectedRequestBody);
      req.flush(expectedUsers);
    });

  });

});
