import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent  {
  list: any=[];
  oprice: any;
  iname: any;
  total: any;
  add: any;
  date: Date | undefined;
  

  constructor() { 
    let a = localStorage.getItem('list');
    if (a) {
      this.list = JSON.parse(a);
    }
  }
  // save(){
  //  let f={
  //    name:this.iname,
  //    price:this.oprice,
  //    total:this.total
  //  };
  //  this.list.push(f);
  //  this.total();
  //  localStorage.setItem('list', JSON.stringify(this.list));
  //  console.log(this.total);
      
  //   }
  // }
  sum() {
    this.add = this.list.reduce((a: number, b: any) => {
      return a + parseInt(b.price);
    }, 0);
   return this.add;
  }
  NewRow() {
    let rowData = {
      name: '',
      price: 0,
      qty: 1,
      tot:this.add
    };
    this.list.push(rowData);
  }

  ngOnInit() {
    this.date = new Date();
 }
  delete(list: any) {
    const index = this.list.indexOf(list);
    this.list.splice(index, 1);
  }
}

