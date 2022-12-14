import { Component } from '@angular/core';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private dataStoreService: DataStoreService) {}

  loginMethod(username: string, password: string) {
    // console.log(username, password);
    this.dataStoreService.loginMethodClicked(username, password);
  }


}
