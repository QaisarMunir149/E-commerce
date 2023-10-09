import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContectComponent } from './contect/contect.component';
import { ProductsComponent } from './products/products.component';
import { ChildComponent } from './child/child.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { DashbordComponent } from './dashbord/dashbord.component';

const approutes:Routes=[
  // {path:'', redirectTo:'child', pathMatch:'full'},
  //  {path:'child', component:ChildComponent},
  // {path:'home', component:HomeComponent},
  // {path:'about', component:AboutComponent},
  // {path:'contect', component:ContectComponent},
  // {path:'products', component:ProductsComponent},
  // {path:'**', component:WildcardComponent},
  {path:'',component:SigninComponent},
  {path:'signup',component:SingupComponent},
   {path:'dashboard',component:DashbordComponent}

]



@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }