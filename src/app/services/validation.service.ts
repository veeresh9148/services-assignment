import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ValidationService {
  constructor(private toastr:ToastrService) {}

  registeredSuccessfullMethod() {
    this.toastr.success('Registered Successfully!!')
  }
  loginSuccessfullMethod(username: string, password: string) {
    // console.log('successfully logged in..');
    this.toastr.success('Successfully loggedin..')

  }

  loginUnSuccessfullMethod() {
    this.toastr.error('please enter valid details..')
  }
}


// {
//   providedIn: 'root',
// }