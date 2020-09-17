import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) {}

  all() {
    return this.apiService.request('users', 'GET');
  }

  getById(id: any) {
    return this.apiService.request(`users/${id}`, 'GET');
  }
}
