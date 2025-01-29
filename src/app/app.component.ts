import { Component } from '@angular/core';
import { UsersListComponent } from './components/users-list/users-list.component';

@Component({
  selector: 'app-root',
  imports: [UsersListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-code-challenge';


  constructor(){
  }

}
