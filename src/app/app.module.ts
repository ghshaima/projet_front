import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatCardModule} from '@angular/material/card'; 
import { FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';

import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, ROUTES } from '@angular/router';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';

import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './admin/sidebar-admin/sidebar-admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { NavbarEmployeeComponent } from './employee/navbar-employee/navbar-employee.component';
import { SidebarEmployeeComponent } from './employee/sidebar-employee/sidebar-employee.component';
import { DashboardEmployeeComponent } from './employee/dashboard-employee/dashboard-employee.component';
import {MatDividerModule} from '@angular/material/divider'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddAbsenceComponent } from './admin/add-absence/add-absence.component';

import { AllEmployeeComponent } from './admin/all-employee/all-employee.component';
import { ManageEmployeeComponent } from './admin/manage-employee/manage-employee.component';

@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
     DashboardAdminComponent,
    
     NavbarAdminComponent,
     SidebarAdminComponent,
     RegisterComponent,
     NavbarEmployeeComponent,
     SidebarEmployeeComponent,
     DashboardEmployeeComponent,
    
     AddEmployeeComponent,
     AddAbsenceComponent,
   
     AllEmployeeComponent,
         ManageEmployeeComponent,
     
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    ReactiveFormsModule,
    //NgChartsModule,
    //FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    
   
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
