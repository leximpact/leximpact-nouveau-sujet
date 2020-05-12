import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  get<T>(url: string) {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: object) {
    return this.http.post<T>(url, body);
  }

}
