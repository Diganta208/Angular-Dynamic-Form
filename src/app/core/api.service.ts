import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  get(url: string, options = {}) {
    return this.http.get(url, options);
  }

  post(url: string, payload: any, options = {}) {
    return this.http.post(url, payload, options);
  }

  put(url: string, payload: any, options = {}) {
    return this.http.put(url, payload, options);
  }

  patch(url: string, payload: any, options = {}) {
    return this.http.patch(url, payload, options);
  }

  delete(url: string, options = {}) {
    return this.http.delete(url, options);
  }
}
