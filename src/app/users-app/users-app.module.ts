import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UsersComponent} from './components/users/users.component';
import {PostsComponent} from './components/posts/posts.component';
import {TodosComponent} from './components/todos/todos.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [DashboardComponent, UsersComponent, PostsComponent, TodosComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, SharedModule, HttpClientModule]
})
export class UsersAppModule { }
