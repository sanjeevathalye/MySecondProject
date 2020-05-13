import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from './employee-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MySecondProject';
  employees = [];

  constructor(private _empservice: EmployeeServicesService) { }

  ngOnInit(): void {
    this.employees = this._empservice.getData();
  }
}
