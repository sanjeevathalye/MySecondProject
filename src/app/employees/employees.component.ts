import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = [];

  constructor(private _empservice: EmployeeServicesService) { }

  ngOnInit(): void {
    this._empservice.getData().subscribe (data => this.employees = data);
  }

}
