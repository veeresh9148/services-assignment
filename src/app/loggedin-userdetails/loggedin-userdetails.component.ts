import { Component ,AfterContentChecked} from '@angular/core';
import { DataStoreService } from '../services/data-store.service';

@Component({
  selector: 'app-loggedin-userdetails',
  templateUrl: './loggedin-userdetails.component.html',
  styleUrls: ['./loggedin-userdetails.component.css']
})
export class LoggedinUserdetailsComponent implements AfterContentChecked{

  displayLoggedInUserData=[]

  constructor(private dataStored:DataStoreService){
    
  }

  ngAfterContentChecked(){
    this.displayLoggedInUserData=this.dataStored.testData
  // console.log(this.displayLoggedInUserData)
}

  



}
