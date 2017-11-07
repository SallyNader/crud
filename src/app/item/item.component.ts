import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
items :string[]=["Angular 4","React","Underscore"];

newItem:string="";
  constructor() { }

  pushItem(){
  if(this.newItem != ""){

    this.items.push(this.newItem);
     this.newItem="";
  }

  }


  removeItem(index){
  this.items.splice(index,1);


  }

  ngOnInit() {
  }

}
