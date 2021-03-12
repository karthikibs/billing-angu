import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.scss']
})
export class Product1Component  {

  fitems: any;
  list: any = [];
  gnumber: any;
  hprice: any;
  total: any;
  add: any;
  qty: any;

  constructor() {
    let a = localStorage.getItem('list');
    if (a) {
      this.list = JSON.parse(a);
    }
  }
  save() {
    let f = {
      items: this.fitems,
      price: this.hprice,
      total: this.total
    };
    this.list.push(f);
    this.ftotal();
    localStorage.setItem('list', JSON.stringify(this.list));
    console.log(this.total)
  }

  ftotal() {
    this.total = this.qty * this.hprice;
    console.log(this.total)
  }
  
  sum() {
    this.add = this.list.reduce((a: number, b: any) => {
      return a + (b.total);
    }, 0);
    console.log(this.add)
  }

  delete(list: any) {
    const index = this.list.indexOf(list);
    this.list.splice(index, 1);
  }
}


  

