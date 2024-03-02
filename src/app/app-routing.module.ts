import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClickDynamicCardComponent } from './click-dynamic-card/click-dynamic-card.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MushahidComponent } from './mushahid/mushahid.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { LoginComponent } from './login/login.component';
import { PeginatorComponent } from './peginator/peginator.component';
import { DynamicExampleComponent } from './dynamic-example/dynamic-example.component';

const routes: Routes = [
  {
    path: 'home' , component: HomeComponent
  },
  {
    path: 'about',  component: AboutComponent
  },
  {
    path: 'blog',  component: BlogComponent
  },
  {
    path: 'contactus',  component:ContactusComponent
  },
  {
    path: 'click-dynamic-card',  component:ClickDynamicCardComponent
  },
  {
    path: 'dynamic-card',  component:DynamicCardComponent
  },
  {
    path: 'sign-up',  component:SignUpComponent
  },
  {
    path: 'mushahid',  component:MushahidComponent
  },
  {
    path: 'new-task',  component:NewTaskComponent
  },
  {
    path: 'login',  component:LoginComponent
  },
  {
    path: 'signup',  component:SignUpComponent
  },
  {
    path: 'peginator',  component:PeginatorComponent
  },
  {
    path: 'dynamic-example',  component:DynamicExampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
