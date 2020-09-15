import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export type HttpMethod = 'GET' | 'POST' | 'DELETE' | 'PATCH';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpClient: HttpClient) {}

  request<T>(url: string, method: HttpMethod ): Observable<T> {
    return this.httpClient.request<T>(method, this.baseUrl + url);
  }

}
