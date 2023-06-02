import { Component } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {

  horizontalData = [
    { field: 'Name', value: 'John Doe' },
    { field: 'Age', value: 30 },
    { field: 'Email', value: 'johndoe@example.com' }
  ];

  constructor(public _task:TaskService){
    
  }



}
