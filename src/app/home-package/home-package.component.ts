import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home-package',
  templateUrl: './home-package.component.html',
  styleUrls: ['./home-package.component.css']
})
export class HomePackageComponent {

  model: NgbDateStruct | undefined;

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

}
