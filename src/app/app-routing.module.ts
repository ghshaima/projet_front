import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { RegisterComponent } from './register/register.component';
import {EmployeeRequestsComponent } from './admin/employee-requests/employee-requests.component';
import{LeaveRequestComponent} from './admin/leave-request/leave-request.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';



const routes: Routes = [
  
  {path:'', component:LoginComponent},
  {path:'dashboard-admin', component:DashboardAdminComponent},
  {path:'dashboard-employee', component:DashboardEmployeeComponent },
  {path:'register', component:RegisterComponent},
  {path:'employee-requests', component:EmployeeRequestsComponent },
  {path:'admin/leave-requests' , component:LeaveRequestComponent},
  {path:'manage-employee', component:ManageEmployeeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
