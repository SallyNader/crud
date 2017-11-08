import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   id:number ;

   private header=new Headers({"Content-Type" :"application/json"});
  products =[];
  constructor(private _http: Http) { }
  
  fetchData(){

    this._http.get("http://localhost:5555/products").subscribe(
      (res: Response) => {
        this.products = res.json();
      }
    )

  }

  deleteProduct(id){
   if(confirm("are you sure")){
      const url = `${"http://localhost:5555/products"}/${id}`;

      return this._http.delete(url,{headers:this.header}).toPromise()
      .then(() => {        
                this.fetchData();
              });

     


   }

  }
  ngOnInit() {
    this.fetchData();
  }

}
