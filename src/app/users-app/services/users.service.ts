import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ApiService} from '../../shared/api.service';

export interface User {
  id: number;
  name: string;
  completed?: boolean;
  email?: string;
  street?: string;
  city?: string;
  zipcode?: string;
}

const collectionName = 'users';

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(private apiService: ApiService) {}

  getAll(): Observable<User[]> {
    return this.apiService.request<User[]>(collectionName, 'GET');
  }

  getById(userId: number): Observable<User> {
    return this.apiService.request(`${collectionName}/${userId}`, 'GET');
  }

}



