import { Component, OnInit, OnChanges, Input, AfterContentChecked, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges,
 AfterContentInit, AfterContentChecked, OnDestroy
{

  @Input() prop;

  constructor() { 
    console.log ('hello from lifecycle constructor');
  }

  ngOnInit(): void {
    console.log ('hello from lifecycle ngOnInit');
  }

  ngOnChanges(changes): void {
    console.log ('hello from lifecycle ngOnChanges');
    console.log(changes);
  }

  ngAfterContentInit(): void {
    console.log ('hello from lifecycle ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log ('hello from lifecycle ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log ('hello from lifecycle ngOnDestroy');
  }

}
