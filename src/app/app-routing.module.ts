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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
