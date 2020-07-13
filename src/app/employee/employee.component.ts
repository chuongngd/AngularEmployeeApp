import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  users:[];
  columnsorders = ["OrderId", "EventId", "Location","Order Date", "Total Price"];
 
  orders:[];
  columns = [ "Id", "First Name", "Last Name","Email"]
  userClick:any;

  constructor(private employees: EmployeeService) { }

  ngOnInit(): void {
    this.getUsers();
    console.log("list " + this.users);
  }

  getUsers()
  {
    this.employees.GetUsers().subscribe(res=>{
      this.users = res;
    })
  }
  detailUserOrders(user)
  {
    this.employees.GetOrders(user).subscribe(res=>{
      this.userClick = user.UserId;
      
      this.orders = res;
      console.log(this.orders);
    })
  }

}
