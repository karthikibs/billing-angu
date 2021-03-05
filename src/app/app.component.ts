import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fitems: any;
  list: any = [];
  gnumber: any;
  hprice: any;
  total: any;
  add: any;

  constructor() {
    let a = localStorage.getItem('list');
    if (a) {
      this.list = JSON.parse(a);
    }
  }

  save() {
    let f = {
      items: this.fitems,
      number: this.gnumber,
      price: this.hprice,
      total: this.total
    };
    this.list.push(f);
    this.ftotal();
    localStorage.setItem('list', JSON.stringify(this.list));
    console.log(this.total)
  }

  ftotal() {
    this.total = this.gnumber * this.hprice;
    console.log(this.total)
  }

  sum() {
    this.add = this.list.reduce((a: number, b: any) => {
      return a + (parseInt(b.price) * parseInt(b.number));
    }, 0);
    console.log(this.add)
  }

  delete(list: any) {
    const index = this.list.indexOf(list);
    this.list.splice(index, 1);
  }
}
