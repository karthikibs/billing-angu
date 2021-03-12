import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { BillingpageComponent } from './billingpage/billingpage.component';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductpageComponent,
    BillingpageComponent,Product1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
