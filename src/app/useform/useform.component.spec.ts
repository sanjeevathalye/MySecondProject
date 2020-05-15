import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseformComponent } from './useform.component';

describe('UseformComponent', () => {
  let component: UseformComponent;
  let fixture: ComponentFixture<UseformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
