import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import {MatButtonModule} from '@angular/material/button';
import { ContactusComponent } from './contactus/contactus.component';
import { DynamicCardComponent } from './dynamic-card/dynamic-card.component';
import { ClickDynamicCardComponent } from './click-dynamic-card/click-dynamic-card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MushahidComponent } from './mushahid/mushahid.component';
import {MatIconModule} from '@angular/material/icon';
import { NewTaskComponent } from './new-task/new-task.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './sign-up/signup/signup.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PeginatorComponent } from './peginator/peginator.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamicExampleComponent } from './dynamic-example/dynamic-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    // HomeComponent,
    BlogComponent,
    ContactusComponent,
    DynamicCardComponent,
    ClickDynamicCardComponent,
    SignUpComponent,
    MushahidComponent,
    NewTaskComponent,
    LoginComponent,
    SignupComponent,
    PeginatorComponent,
    DynamicExampleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    CarouselModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
