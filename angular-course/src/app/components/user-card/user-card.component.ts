import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  
  @Output() deleteUserEvent = new EventEmitter<number>();
  @Input() user!: User;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(userId: number) {
    this.deleteUserEvent.emit(userId);
  }

}
