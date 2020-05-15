import { EmployeeServicesService } from './employee-services.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { UseformComponent } from './useform/useform.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    LifecycleComponent,
    UseformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [EmployeeServicesService],

  bootstrap: [AppComponent]
})
export class AppModule { }
