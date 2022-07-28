import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

@Output() addUserEvent = new EventEmitter<any>();

  UpdateMode: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(form: any) {
    this.addUserEvent.emit(form);
  }

  changeMode() {
    this.UpdateMode = !this.UpdateMode;
  }

}
