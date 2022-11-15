import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
  {path:'', component:LoginComponent},
  {path:'dashboard-admin', component:DashboardAdminComponent},
  {path:'dashboard-employee', component:DashboardEmployeeComponent },
  {path:'register', component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
