import { summaryFileName } from '@angular/compiler/src/aot/util';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billingpage',
  templateUrl: './billingpage.component.html',
  styleUrls: ['./billingpage.component.scss']
})
export class BillingpageComponent  {
  list: any=[];
  qty:any;
  price:any;
  total:any;
  hprice:any;
  add:any;
 
  
  constructor() 
  { 
     let a = localStorage.getItem('list');
      if (a) 
      {
        this.list = JSON.parse(a);
      }
  }
 
  getTotal() {
    let total = 0;
    this.list.forEach((x: { price: number; qty: number; }) => {
      total += x.price * x.qty;
    });
    return total;
  }
  onchangename(a:any){
    let name = a.name;
    let q= this.list.find((x: { name: any; })=> x.name ===name);
    a.price = q.price;
  }
  addRow() {
    let rowData = {
      name: '',
      price: 0,
      qty: 1
    };
    this.list.push(rowData);
  }
  
   delete(list: any) {
    const index = this.list.indexOf(list);
    this.list.splice(index, 1);
  }
  // add(){
  
  //   this.total = this.qty * this.hprice;
  //   return this.total;
    
  }
 


