import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms' ;
import { Validators } from '@angular/forms' ;

@Component({
  selector: 'app-useform',
  templateUrl: './useform.component.html',
  styleUrls: ['./useform.component.css']
})
export class UseformComponent implements OnInit {

  profileForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup ({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    })
  });

  constructor(private fb: FormBuilder) { }

  profileValidity = this.fb.group ({
    firstName: ['',  Validators.required],
    lastName: ['',  Validators.required],
    address: this.fb.group ({
      street: ['',  Validators.required],
      city: [''],
      state: [''],
      zip: ['',  Validators.required]
    })
  });

  ngOnInit(): void {
  }

  onSubmit(myform) {
    console.log(myform);
  }

  OnProfileSubmit() {
    console.log(this.profileForm);
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Harshal',
      address: {
        street: '38 Cabot Ct'
      }
    });
  }

}

