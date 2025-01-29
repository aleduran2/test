import { Component, EventEmitter, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-list',
  imports: [CardComponent, CommonModule],
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

  searchTerm(event: any) {
    this.filteredUsers = this.users.filter(user => user.name.includes(event.target?.value))
  }

}
