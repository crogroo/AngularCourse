import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

export interface UserFormModel {
  firstName: string;
  lastName: string;
  imgUrl: string;
  address: string;
}


@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  users: User[] = 
  [
      {
      id: 1,
      imgUrl: "https://userstock.io/data/wp-content/uploads/2020/06/robert-godwin-cdksyTqEXzo.jpg",
      name: "Petar Peric",
      address: "Petrova ulica 1"
      },
      {
      id: 2,
      imgUrl: "https://userstock.io/data/wp-content/uploads/2020/06/jack-finnigan-rriAI0nhcbc.jpg",
      name: "Ivan Ivanic",
      address: "Ivanova trava 2"
      },
      {
      id: 3,
      imgUrl: "https://userstock.io/data/wp-content/uploads/2017/09/mohammad-metri-257271-scaled.jpg",
      name: "Marija Marinic",
      address: "Marijina ulica 3"
      },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addUser(form: UserFormModel){

    let lastId = this.users.length;
    let user: User = { id: lastId +1, name:form.firstName + " " + form.lastName, imgUrl: form.imgUrl, address: form.address };

    this.users.push(user);
  }
  deleteUser(userId:number){
    this.users = this.users.filter(user => user.id != userId);
  }

}
