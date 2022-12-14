import { Component } from '@angular/core';
import {DataStoreService} from '../app/services/data-store.service'
import { ValidationService } from './services/validation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataStoreService,ValidationService]
  
})
export class AppComponent {
  title = 'services-assignment';



}
