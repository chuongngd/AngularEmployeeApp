import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [{path:'test',component:TestComponent},
                        {path:'home',component:HomeComponent},
                        {path:'employee',component:EmployeeComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
