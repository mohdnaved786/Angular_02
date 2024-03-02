import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import{FormGroup , FormBuilder , Validators,} from '@angular/forms'
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @ViewChild(BsDatepickerDirective, { static: false }) datepicker?: BsDatepickerDirective;
 
  @HostListener('window:scroll')
  onScrollEvent() {
    this.datepicker?.hide();
  }
  // finalReactiveForm!: FormGroup;
  // constructor(private formbuilder: FormBuilder){}

  ngOnInit(): void {
    // this.finalForm();
  }

  // finalForm(){
  //   this.finalReactiveForm = this.formbuilder.group({
  //     'firstName': [null , [Validators.required]],
  //     'lastName': [null , [Validators.required]]
  //   })
  // }

  // finalSubmitForm(){
  //   console.log("my final value=====>", this.finalReactiveForm.value);
  // }


  // Interpolation

  // data:string = 'Muhammad Naved';
  // myMethod(){
  //   return "My Laptop Name Is " + this.data;
  // }

  // appStatus:boolean = true;
  // status1 = "Online";
  // status2 = "Offline";

  // myClass ={
  //   class1: true,
  //   class2: false,
  //   class3: true
  // }

  // uname: string="naved";

}
