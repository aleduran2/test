import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UsersListComponent, CardComponent],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class AppModule { }
