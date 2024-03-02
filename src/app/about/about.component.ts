import { Component, OnInit } from '@angular/core';
import {FormGroup , FormBuilder , Validators} from '@angular/forms'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  navedReactiveForm!: FormGroup;
  constructor(private frombuilder: FormBuilder){}

  ngOnInit(): void {
    this.navedForm();
  }

  navedForm(){
    this.navedReactiveForm = this.frombuilder.group({
      'firstName' : [null , [Validators.required]],
      'lastName' : [null , [Validators.required]]
    })
  }

  navedSubmitForm(){
    console.log("my data value===>", this.navedReactiveForm.value)
  }

}
