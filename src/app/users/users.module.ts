import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  exports: [UsersComponent, UserComponent],
  imports: [CommonModule, RouterModule, SharedModule]
})
export class UsersModule { }
