import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 fitems:any; 
  list: any =[];
  gnumber: any;
  hprice: any;
  total=0;
  
 save(){
  let f = {
    items : this.fitems,
    number : this.gnumber,
    price : this.hprice,
    total:this.total
  };
  this.list.push(f);
  this.ftotal();
}
  
  ftotal(){
    this.total= this.gnumber*this.hprice;
    console.log(this.total)
  }

  delete(list: any) {
    const index = this.list.indexOf(list);
    // tslint:disable-next-line:align
    this.list.splice(index, 1);
  }
}
