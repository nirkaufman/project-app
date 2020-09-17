import {Route} from '@angular/router';
import {UsersComponent} from './users/users/users.component';
import {UserComponent} from './users/user/user.component';
import {HomeComponent} from './auth/home/home.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'users/:id',
    component: UserComponent
  }
];
