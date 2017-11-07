import { Injectable } from '@angular/core';

@Injectable()
export class MovielistService {
  listItems:any[]=['one','two','three'];
  
  constructor() { }

  getItems(){

    return this.listItems;
  }

}
