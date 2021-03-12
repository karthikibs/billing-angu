import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BillingpageComponent } from './billingpage/billingpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Product1Component } from './product1/product1.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {path:"",component:HomepageComponent},
  { path:"product",component:ProductpageComponent},
  {path:"billing",component:BillingpageComponent},
  {path:"product1",component:Product1Component},

  {path:'**' ,redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

