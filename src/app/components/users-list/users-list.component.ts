import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service.service';

@Component({
  selector: 'app-users-list',
  imports: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private userService: UserService){
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data=> {
      this.users = data;
      this.filteredUsers = data;
    })
  }

  searchTerm(value: string) {
    this.filteredUsers = this.users.filter(user => user.name.includes(value))
  }

}
