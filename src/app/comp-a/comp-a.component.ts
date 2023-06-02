import { Component, Input } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  
  constructor(public _task:TaskService){
    
  }

  tabrow=[{
    tab1 :  'qwe',
    tab2 :  'qwe2',
  }];

  addtable(){this.tabrow.push({tab1 :  'zxc', tab2 :  'zxcvv',})}
  delettable(){this.tabrow.pop()}


  dataToSend: string = 'Hello, Child!';

}
