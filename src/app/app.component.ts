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
  xyz = 1;

  constructor(private _empservice: EmployeeServicesService) { }

  ngOnInit(): void {
    this._empservice.getData().subscribe (data => this.employees = data);
  }
}
