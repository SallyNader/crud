import { Component, OnInit } from '@angular/core';

import {Http, Response, Headers} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  productObj : object= {};
  confirmationString :string ="new product was added";
  isAdded :boolean =false;
  constructor(private _http:Http) { }

  ngOnInit() {
  }


  addNewProduct(product){

    this.productObj={
      "name":product.name,
      "color":product.color
    };
 
    this._http.post("http://localhost:5555/products/" ,this.productObj).subscribe(

    (res : Response)=>{

       this.isAdded=true;
      console.log(res);
    }

    );
  }

}
