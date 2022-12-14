import { Component } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private register: DataStoreService) {}

  phoneNum: number;

  registerMethod(
    username: string,
    password: string,
    email: string,
    phoneNum: number
  ) {
    // console.log(username, password, email, this.phoneNum);
    this.register.registerMethodClicked(username, password, email, phoneNum);
  }
}
