import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
newEmplyeeClicked = false;
employess = [
  {name: 'Swati', position: 'developer'},
  {name: 'Shiv', position: 'unemployed'},
  {name: 'usha', position: 'engineer'},
  {name: 'sai', position: 'tester'},
  {name: 'Swati', position: 'developer'},
];
color: any;
  constructor() { }

  ngOnInit(): void {
  }
model: any = [];
model2: any = [];
addEmployee(){
  this.employess.push(this.model);
  this.model={};
}
deleteEmployee(id:any){
  this.employess.splice(id)
  console.log(id);
}
myValue: any;
editEmployee(editEmployeeInfo: any){
  this.model2.name = this.employess[editEmployeeInfo].name;
  this.model2.position=this.employess[editEmployeeInfo].position;
  this.myValue= editEmployeeInfo;
}
updateEmployee(){
let editEmployeeInfo = this.myValue;
for(let i=0; i<this.employess.length; i++){
  if(i==editEmployeeInfo){
    this.employess[i] =  this.model2;
    this.model2 = {}
  }
}
}
addNewEmployeeBtn(){
this.newEmplyeeClicked = !this.newEmplyeeClicked;
}
changeColor1(){
this.color = !this.color;
if(this.color){
  return '#ffffff';
}
  else{
  return '#f6f6f6';
}
}
}
