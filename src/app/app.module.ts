import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UsersListComponent } from './components/users-list/users-list.component';
// import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [UsersListComponent, CardComponent],
  imports: [
    CommonModule, HttpClientModule, FormsModule, BrowserModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
