import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-employee',
  templateUrl: './dashboard-employee.component.html',
  styleUrls: ['./dashboard-employee.component.css']
})
export class DashboardEmployeeComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  sideBarToggler (){
    this.sideBarOpen = !this.sideBarOpen;
  }
  
}
