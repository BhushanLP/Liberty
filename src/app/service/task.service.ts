import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public data:string[];

  constructor() { 
    this.data = []
  }

  getTask(){
    return this.data;
  }
  addTask(task:string){
    this.data.push(task)
  }

  

}
