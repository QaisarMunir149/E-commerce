import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms'
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http'
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SingupComponent } from './singup/singup.component';

import { AuthinterceptorService } from './authinterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContectComponent,
    ProductsComponent,
     ParentComponent,
    ChildComponent,
    WildcardComponent,
    SigninComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
DashbordComponent,
SingupComponent,
  

  ],
  imports: [
   ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
   FormsModule,
  HttpClientModule,
  FontAwesomeModule,

  ],
  providers: [
   {
    // HTTP Interceptor for authentication
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
