import { Component,OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {


  // items: any[] = [];
  // name: string = '';
  // email: string = '';

  // create() {
  //   if (this.name && this.email) {
  //     this.items.push({ name: this.name, email: this.email });
  //     this.name = '';
  //     this.email = '';
  //   }
  // }

  // edit(item: any) {
  //   this.name = item.name;
  //   this.email = item.email;
  //   this.remove(item);
  // }

  // remove(item: any) {
  //   const index = this.items.indexOf(item);
  //   if (index !== -1) {
  //     this.items.splice(index, 1);
  //   }
  // }


  // myArray: any[] = [];


  // tabs = [
  //   { id: 1, title: 'Tab 1' },
    
  // ];

  // addTab() {
  //   const newTab = {
  //     id: this.tabs.length + 1,
  //     title: `Tab ${this.tabs.length + 1}`
  //   };
  //   this.tabs.push(newTab);
  // }
  groups10=[
    {
      // fieldno: 1,
      field1 : 'abc1',
      field2 : 'abc2',
      field3 : 'abc3',
      field4 : 'abc4',
      field5 : 'abc5',
      field6 : 'abc6',
      field7 : 'abc7',
      field8 : 'abc8'
    },
  ];


  addItem10(): void {
    this.groups10.push({ 
    // fieldno : 1,
    field1 : 'xyz1',
    field2 : 'xyz2',
    field3 : 'xyz3',
    field4 : 'xyz4',
    field5 : 'xyz5',
    field6 : 'xyz6',
    field7 : 'xyz7',
    field8 : 'xyz8'});
   }
    deletItem10(): void {
    this.groups10.pop();
   }


  tabs = ['Table'];
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    let l = 'Table'+this.tabs.length;
    this.tabs.push(l);

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }
}