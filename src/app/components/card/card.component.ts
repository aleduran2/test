import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'user-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() user: User;

}
