// import { Injectable} from '@angular/core';
// import { ValidationService } from './validation.service';

// @Injectable()

// export class DataStoreService {
//   constructor(private validate: ValidationService) {}

//   registeredData: any[] = [];

//   registerMethodClicked(
//     username: string,
//     password: string,
//     email: string,
//     phoneNum: number
//   ) {
//     this.registeredData.push(username, password, email, phoneNum);
//     this.validate.registeredSuccessfullMethod();
//   }

//   loginMethodClicked(username: string, password: string) {
//     if (
//       this.registeredData.includes(username) &&
//       this.registeredData.includes(password)
//     ) {
//       this.validate.loginSuccessfullMethod(username, password);
//       console.log(this.registeredData)
//     } else {
//       this.validate.loginUnSuccessfullMethod();
//     }
//   }
// }


// {
//   // providedIn: 'root',
// }


// new changes


import { Injectable,EventEmitter } from '@angular/core';
import { ValidationService } from './validation.service';

@Injectable()

export class DataStoreService {
  constructor(private validate: ValidationService) {}

  
  registeredData=[]
  testData=[]

// loggedInUserDetails:any=new EventEmitter<{username: string, password: string,email:string,phoneNum:number}>;

  registerMethodClicked(
    username: string,
    password: string,
    email: string,
    phoneNum: number
  ) {
    this.registeredData.push(username, password, email, phoneNum);
    this.validate.registeredSuccessfullMethod();
  }

  loginMethodClicked(username: string, password: string) {
    if (
      this.registeredData.includes(username) &&
      this.registeredData.includes(password)
    ) {
      this.validate.loginSuccessfullMethod(username, password);
      this.testDataMethod()
      console.log(this.registeredData)
    } else {
      this.validate.loginUnSuccessfullMethod();
    }
  }

  testDataMethod(){
   this.testData=this.registeredData
  }
}


