import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-business-package',
  templateUrl: './business-package.component.html',
  styleUrls: ['./business-package.component.css']
})
export class BusinessPackageComponent {


  model: NgbDateStruct | undefined;
  // fromDate: NgbDate | undefined;
  // toDate: NgbDate | undefined;

  // Mechanical & Electrical Appliances
    groups=[
      {
        "name": "abc",
        "items": "def"
      },
   ];
    // Electronic Appliances
    groups2=[
      {
        "name": "abc",
        "items": "def"
      },
   ];
  //  Boiler and Pressure Plant
  groups3=[
    {
      "name": "abc",
      "items": "def"
    },
  ];
  // Portable Equipment All Risks
  groups4=[
    {
      "name": "abc",
      "items": "def"
    },
  ];
  // Mechanical & Electrical Appliances   groups1
    addItem(): void {
    this.groups.push({name: 'uvw', items: 'xyz'});
   }
    deletItem(): void {
    this.groups.pop();
   }
  // Electronic Appliances   groups2
    addItem2(): void {
    this.groups2.push({name: 'uvw', items: 'xyz'});
   }
    deletItem2(): void {
    this.groups2.pop();
   }
   // Boiler and Pressure Plant   groups3
    addItem3(): void {
    this.groups3.push({name: 'uvw', items: 'xyz'});
   }
    deletItem3(): void {
    this.groups3.pop();
   }
   // Portable Equipment All Risks   groups4
    addItem4(): void {
    this.groups4.push({name: 'uvw', items: 'xyz'});
   }
    deletItem4(): void {
    this.groups4.pop();
   }

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


   
  tabrow=[{
    tab1 :  'qwe',
    tab2 :  'qwe2',
  }];

  addtable(){this.tabrow.push({tab1 :  'zxc', tab2 :  'zxcvv',})}
  delettable(){this.tabrow.pop()}


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
