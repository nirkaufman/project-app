import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../shared/api/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$;
  loading: boolean;

  constructor(
      private usersService: UsersService,
      private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.users$ = this.usersService.all();
  }

  showDetails(id: any) {
    this.router.navigate(['users', id]);
  }
}
