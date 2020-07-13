import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
columns = ["name", "age","gender","position","salary"];
  employees = [{
    name: "Tom",
    age: 48,
    gender: "male"
  },
{
  name: "Terry",
  age: 28,
  gender: "male"
}]
  constructor() { }

isSenior(age: number){
  if(age > 40)
    return true;
  else
    return false;
}
salary(age:number)
{
  if(this.isSenior(age))
  {
    return age*10 + 50000;
  }
  else
  {
    return age*5 + 50000;
  }
}
  ngOnInit(): void {
    
  }

}
