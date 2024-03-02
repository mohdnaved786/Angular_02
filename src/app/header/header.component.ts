import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  headerData = [
    {
      title: 'Home',
      path: 'home'
    },
    {
      title: 'Peginator',
      path: 'peginator'
    },
    {
      title: 'API',
      path: 'dynamic-example'
    },
    {
      title: 'Login',
      path: 'login'
    },
    {
      title: 'SignUp',
      path: 'signup'
    },
    {
      title: 'About',
      path: 'about'
    },
    {
      title: 'Blog',
      path: 'blog'
    },
    {
      title: 'Contact Us',
      path: 'contactus'
    },
    {
      title: 'Click Dynamic Card',
      path: 'click-dynamic-card'
    },
    {
      title: 'Dynamic Card',
      path: 'dynamic-card'
    },
    {
      title: 'Sign Up',
      path: 'sign-up'
    },
    {
      title: 'New Task',
      path: 'new-task'
    },
  {
      title: 'MUSHAHID',
      path: 'mushahid'
    }
  ]
  ngOnInit(): void {
    console.log("menu-list===>", this.headerData)
  }

}
