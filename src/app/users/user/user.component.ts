import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/api/users.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user$;

  constructor(
      private usersService: UsersService,
      private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.user$ = this.usersService.getById(this.activeRoute.snapshot.params.id);
  }

}
