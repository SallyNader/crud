import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router' ;
import 'rxjs/add/operator/toPromise'; 

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  id:number;
  data :object ={};
  products =[];
  productObj : object ={};

  private headers = new Headers({ 'Content-Type' : 'application/json'});

  constructor(private _router :Router , private _route : ActivatedRoute ,private _http : Http) { }

  ngOnInit() {
    //fetch id from router
    this._route.params.subscribe( params =>{
      //convert id to string

      this.id = +params['id'];

    });

    //get product by id 
    this._http.get("http://localhost:5555/products").subscribe(  (res :Response)  =>{
     this.products =res.json();

     for( let i =0 ; i< this.products.length ; i++){
       if(parseInt(this.products[i].id )=== this.id){
         this.data=this.products[i];
         break;
       }
     }

    });
  }

  updateProduct(product){



  }

}
