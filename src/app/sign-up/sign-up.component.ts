import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  studentReactiveForm!: FormGroup;
  myData: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.studentForm();
    console.log("myData===>", this.myData)
  }

  studentForm(){
    this.studentReactiveForm = this.formBuilder.group({
      'firstName' : [null, [Validators.required]],
      'lastName': [null, [Validators.required]],
      'userName': [null, [Validators.required]],
      'password': [null, [Validators.required]],
      'mobileNumber': [null, [Validators.required]],
      'address': [null, [Validators.required]],
      'city': [null, [Validators.required]],
      'country': [null, ],
      'zip': [null,[Validators.required]],
    })
  }

  submitStudentForm(){
    this.myData.push(this.studentReactiveForm.value);
    console.log("myyyy===>",this.myData)

  }
}

